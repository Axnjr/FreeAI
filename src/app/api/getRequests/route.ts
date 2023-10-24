import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

export async function GET( request : NextRequest ) {
    const req = request?.nextUrl?.searchParams?.get("key")?.replace(/["\\/]/g, '')
    const skipReq = Number(request?.nextUrl?.searchParams?.get("skip")?.replace(/["\\/]/g, '')) || 0;
    const takeReq = Number(request?.nextUrl?.searchParams?.get("take")?.replace(/["\\/]/g, '')) || 10;

    if(req){
        let USERS_API_REQUESTS = await prismaDB.apiRequest.findMany({
            skip:skipReq,
            take:takeReq,
            where : {
                userId:req
            }
        })
        return new NextResponse(JSON.stringify(USERS_API_REQUESTS))
    }
    return new NextResponse(JSON.stringify( await prismaDB.apiRequest.findMany() ))
}