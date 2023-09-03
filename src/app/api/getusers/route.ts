import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

export async function GET() {
    const  u = await prismaDB.user.findMany()
    return new NextResponse(JSON.stringify(u))
}

export async function DELETE( request : NextRequest ) {
    const req = request?.nextUrl?.searchParams?.get("user_email")?.replace(/["\\/]/g, '')
    await prismaDB.user.delete({ where : { email : req } })
    return new NextResponse("USER ACCOUNT DELTED SUCCESSFULLY")
}