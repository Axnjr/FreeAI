import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

export async function GET( request : NextRequest ) {
    const req = request?.nextUrl?.searchParams?.get("email")?.replace(/["\\/]/g, '')
    if(req){
        const user = await prismaDB.user.findUnique({ where : { email:req } })
        if(user) return new NextResponse(JSON.stringify({data:user?.id}))
        else return new NextResponse("User not found with that email.")
    }
    // await prismaDB.apiKey.deleteMany()
    return new NextResponse("Email parameter missing !!")
    // return new NextResponse(JSON.stringify(await prismaDB.user.create({data:{
    //     name:"Test User",
    //     email:"test@gmail.com",
    //     apiKeyId:"test_API_KEY"
    // }})))
}