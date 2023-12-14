import { prismaDB } from "../../../../lib/prismaDb";
import { modelResponse } from "@/lib/model";
import { NextRequest, NextResponse } from "next/server";
import { modelConfigurations, allModelNames, modelConfigType } from "@/app/allModelsConfig";

export async function GET(request: NextRequest, { params }: { params: { model: string } }) {

    const model: modelConfigType[] | [] = modelConfigurations.filter(model => {
        return model.name == params.model
    })

    if (model.length == 0) {
        return new NextResponse(JSON.stringify({
            message: `No model with name ${params.model}. Check if you made typo !`,
            All_models: allModelNames
        }))
    }

    const query = request?.nextUrl?.searchParams?.get("query")?.replace(/["\\/]/g, '')
    const apiKey = request?.nextUrl?.searchParams?.get("key")?.replace(/["\\/]/g, '')
    const test = request?.nextUrl?.searchParams?.get("test")?.replace(/["\\/]/g, '')

    // console.log(`[QUERY:${query},APIKEY:${apiKey},TEST:${test}]`)

    if (test == "true" && query) { // for test users
        // console.log("[TEST USER ARRIVED]")
        const startTime = performance.now();
        const endTime = performance.now();
        const res = await modelResponse(query, model[0].context)

        await prismaDB.apiRequest.create({
            data: {
                userId: `test_API_KEY`,
                status: 200,
                responseTime: `${endTime - startTime}`.slice(0, 15),
                params: query,
                aiModelUsed: model[0].name,
                userStatus: "test user",
                result: res.content.slice(0,75)
            }
        })

        return new NextResponse(JSON.stringify(res))
    }

    if (query && !apiKey) { // for users without apiKey
        // console.log("[USER WITHOUT API KEY ARRIVED]")
        let res = await modelResponse(query, model[0].context)
        // try {
        //     res = await modelResponse(query, model[0].context)
        // } catch (error) {
        //     res = {
        //         Error:"Something went wrong !",
        //         code:"500"
        //     }
        // }
        return new NextResponse(JSON.stringify(res))
    }

    if (query && apiKey) { // for users with apiKey

        // console.log("[USER WITH API KEY ARRIVED]")

        let userSTATUS;
        const
            startTime = performance.now(),
            endTime = performance.now(),
            u = await prismaDB.user.findUnique({ where: { id: apiKey } }),
            res = await modelResponse(query, model[0].context)
        ;

        if (u != null || undefined) userSTATUS = "Authenticated"
        else userSTATUS = "Un-Authenticated"

        let t = await prismaDB.apiRequest.create({
            data: {
                userId: `${u?.id}`,
                status: 200,
                responseTime: `${endTime - startTime}`.slice(0, 15),
                params: query,
                aiModelUsed: model[0].name,
                userStatus: userSTATUS,
                result: res.content.slice(0,75)
            }
        })

        return new NextResponse(JSON.stringify({res,t}))
    }

    return new NextResponse(JSON.stringify(model))
}