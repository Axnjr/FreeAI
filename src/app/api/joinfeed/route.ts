import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

export async function GET( request : NextRequest ){
    const req = request?.nextUrl?.searchParams?.get("password")?.replace(/["\\/]/g, '')
    if(req === process.env.API_ADMIN_PASSWORD){
        const feedback = await prismaDB.user.findMany({ where : { apiKeyId : "feedback" } })
        const join = await prismaDB.user.findMany({ where : { apiKeyId : "join" } })
        return new NextResponse(JSON.stringify({data:feedback,join}))
    }
    else{
        return new NextResponse("Not authorized to move forward !!")
    }
}

export async function POST( request : NextRequest ) {
    const req = request?.nextUrl?.searchParams?.get("query")?.replace(/["\\/]/g, '')
    const req2 = request?.nextUrl?.searchParams?.get("action")?.replace(/["\\/]/g, '')
    const intrested_user = await prismaDB.user.create({
        data:{
            name:req,
            apiKeyId:req2
        }
    })
    return new NextResponse(JSON.stringify({data:intrested_user}))
    
}

export async function DELETE( request : NextRequest ) {
    const req = request?.nextUrl?.searchParams?.get("action")?.replace(/["\\/]/g, '')
    await prismaDB.user.deleteMany({ where : { name : req } })
    return new NextResponse('DELETD')
}