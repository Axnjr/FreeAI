import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

async function query(data: { inputs: string; }){
	const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
		{
			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_ACCESS_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

export async function GET( request : NextRequest ) {
    const req         = request?.nextUrl?.searchParams?.get("query")?.replace(/["\\/]/g, '')
    const usersAPIKey = request?.headers.get("APIKEY")

    if(req && !usersAPIKey) return new NextResponse(JSON.stringify(await query({"inputs":`${req}`})))

    if(req && usersAPIKey){
        const startTime = performance.now();;
        const u = await prismaDB.user.findUnique({ where : { id : usersAPIKey } }) ; let userSTATUS ;
        const res = await query({"inputs":`${req}`})
        const endTime = performance.now();

        if(u != null || undefined) userSTATUS = "Authenticated"
        else userSTATUS = "Un-Authenticated"

        const usersApiData = await prismaDB.apiRequest.create({
            data:{
                userId : `${u?.id}`,
                status:200,
                responseTime:`${endTime-startTime}`,
                params:req.slice(0,45) + " ....",
                aiModelUsed:"summarize",
                userStatus:userSTATUS,
                result:"Too long data 😅☠️..."
            }
        })
        return new NextResponse(JSON.stringify(usersApiData))
    }
    return new Response('Error occured did provided any query parameter !', {status: 500})
}

export async function DELETE( request : NextRequest ) {
    return new NextResponse(JSON.stringify( await prismaDB.apiRequest.deleteMany() ))
}