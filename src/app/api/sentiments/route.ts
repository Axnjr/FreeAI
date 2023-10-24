import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

async function query(data: string) {
    console.log("DATA", data)
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
            {
                headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_ACCESS_TOKEN}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        var result = await response.json()
        console.log("result -",result)
    } catch (error) {
        var result: any = [["Model took too long to load, try again sorry!"]]
    }
    return result;
}

export async function GET(request: NextRequest) {
    const req = request?.nextUrl?.searchParams?.get("query")?.replace(/["\\/]/g, '')
    const req2 = request?.nextUrl?.searchParams?.get("test_API_KEY")?.replace(/["\\/]/g, '')
    const usersAPIKey = request?.headers.get("APIKEY")

    if ((req2 == "true" || true) && req) {

        console.log("Workflow test sentiments")

        const startTime = performance.now();
        const endTime = performance.now();
        const res = await query(req)

        await prismaDB.apiRequest.create({
            data: {
                userId: `test_API_KEY`,
                status: 200,
                responseTime: `${endTime - startTime}`.slice(0, 5),
                params: req,
                aiModelUsed: "sentiments",
                userStatus: "test user",
                result: JSON.stringify(res[0][0])
            }
        })

        return new NextResponse(JSON.stringify(res))

    }

    if (req && !usersAPIKey) return new NextResponse(JSON.stringify(await query(req)))

    if (req && usersAPIKey) {
        const startTime = performance.now();;
        const u = await prismaDB.user.findUnique({ where: { id: usersAPIKey } }); let userSTATUS;
        const res = await query(req)
        const endTime = performance.now();

        if (u != null || undefined) userSTATUS = "Authenticated"
        else userSTATUS = "Un-Authenticated"

        await prismaDB.apiRequest.create({
            data: {
                userId: `${u?.id}`,
                status: 200,
                responseTime: `${endTime - startTime}`.slice(0,5),
                params: req,
                aiModelUsed: "sentiments",
                userStatus: userSTATUS,
                result: JSON.stringify(res[0][0])
            }
        })
        return new NextResponse(JSON.stringify(res))
    }

    return new Response('Error occured did provided any query parameter !', { status: 500 })
}



export async function DELETE(request: NextRequest) {
    return new NextResponse(JSON.stringify(await prismaDB.apiRequest.deleteMany()))
}