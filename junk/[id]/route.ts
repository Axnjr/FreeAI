import { NextResponse } from "next/server";

type Params = {
    params : { id : String };
    searchParams : { [key: string]: string | string[] | undefined };
}

async function FetchData(query:String) {
	return fetch(`https://dummyjson.com/products/search?q=${query}`)
}

export async function GET( request : Request , { params , searchParams } : Params ) {
    // console.log(searchParams) it logs undefined idk why ...
    const data = await (await FetchData(params.id)).json()
    return new NextResponse(JSON.stringify({
        SearchQuery:searchParams,
        Data:data
    }),{status:200})
}