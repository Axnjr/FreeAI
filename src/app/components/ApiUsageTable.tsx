"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"

export default function ApiUsageTable({ apiKey } : { apiKey : string} ) {

    const [requests, setRequests]: any = useState(["Loading your API usage history ..."])
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("")

    async function GetRequests(apiKey : string, take? : number ,skip ?: number,returnBool ?: boolean){
        let t = await (await fetch(`/api/getRequests?key=${apiKey}&take=${take}&skip=${skip}`)).json()
        if(returnBool) return t
        setLoading(false)
        if(t.length < 1) setMessage(`That's it you have made total ${requests.length} requests`)
        else setRequests([...t])
    }

    useEffect(() => {
        (async () => {
            // let requests: any = await (await fetch(`http://localhost:3000/api/getRequests?key=${apiKey}`)).json()
            let requests : any = await GetRequests(apiKey,10,0,true)
            setRequests([...requests])
        })();
    }, [apiKey])

    return (
        <div style={{minHeight:"50vh"}} className="text-center">
            {
                typeof(requests[0]) != "string" ? <Table className="bg-zinc-50 dark:bg-zinc-950 dark:text-neutral-100 text-neutral-900">
                    <TableHeader className="">
                        <TableRow className="text-center text-white font-bold ">
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">No.</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Key used</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Model Used</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Status</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">TimeStamp</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Response Time</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Params</TableHead>
                            <TableHead className="w-fit whitespace-nowrap border dark:border-neutral-700">Result</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            requests.length === 0 ? <TableRow>NO DATA</TableRow>
                                :
                            requests.map((ele: any, id: number) => {
                                return <TableRow key={id} className="text-center">
                                    <TableCell className="">{id + 1}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700" >{ele.userId}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700" >{ele.aiModelUsed}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700" >{ele.status}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700" >{ele.timestamp}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700" >{ele.responseTime}ms</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700 text-left" >{ele.params}</TableCell>
                                    <TableCell className="w-fit whitespace-nowrap border dark:border-neutral-700 text-left" >{ele.result}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
                    :
                <p className="text-center flex items-start pt-32 sm:pt-20 justify-center underline text-xl">
                    <svg className="animate-spin h-6 w-6 text-black dark:text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </p>
            }
            <br/>
            <Button className="items-center my-8"
            onClick={() => { GetRequests(apiKey,10,10,false); setLoading(true) }}>
                {message ? message : "Load more"}
                <svg className="animate-spin ml-2 h-4 w-4 text-white dark:text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    style={{ display : loading ? "block" : "none"}}>
                    <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </Button>
        </div>
    )
}
