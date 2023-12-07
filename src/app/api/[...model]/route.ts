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
    const apiKey = request?.nextUrl?.searchParams?.get("apiKey")?.replace(/["\\/]/g, '')
    const test = request?.nextUrl?.searchParams?.get("test")?.replace(/["\\/]/g, '')

    if (test == "true" && query) { // for test users

        const startTime = performance.now();
        const endTime = performance.now();
        const res = await modelResponse(query, model[0].context)

        await prismaDB.apiRequest.create({
            data: {
                userId: `test_API_KEY`,
                status: 200,
                responseTime: `${endTime - startTime}`.slice(0, 5),
                params: query,
                aiModelUsed: model[0].name,
                userStatus: "test user",
                result: res.content
            }
        })

        return new NextResponse(JSON.stringify(res))
    }

    if (query && !apiKey) { // for users without apiKey
        return new NextResponse(JSON.stringify(await modelResponse(query, model[0].context)))
    }

    if (query && apiKey) { // for users with apiKey

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
                responseTime: `${endTime - startTime}`.slice(0, 5),
                params: query,
                aiModelUsed: model[0].name,
                userStatus: userSTATUS,
                result: res.content
            }
        })

        return new NextResponse(JSON.stringify({res,t}))
    }

    return new NextResponse(JSON.stringify(model))
}