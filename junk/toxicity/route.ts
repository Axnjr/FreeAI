import { NextRequest, NextResponse } from "next/server";
import { prismaDB } from "../../../../lib/prismaDb";

export async function GET( request : NextRequest ) { //{ params } : { params : { query : String } } ) {
    const req = request.nextUrl.searchParams.get("query")
    const api_key : any = request.nextUrl.searchParams.get("key")
    // var user , status = "";

    // if( api_key ){
    const user = await prismaDB.user.findMany() 
    //     if(user.length>2){
    //         status = "HE USER JINDA HAI RADHA KRISHNA"
    //     }
    // }


    // const ans = await (await fetch(`https://freeaiinliapitoxicity.vercel.app/toxicity?query="${req}"`)).json()
    

    return new NextResponse(JSON.stringify({
        DATA:req,key: api_key,user
    }),{ status:200 })
}