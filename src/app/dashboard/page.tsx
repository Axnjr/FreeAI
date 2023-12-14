"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../components/Loading";
import { CopyToClip } from "@/lib/utils";
import { ToastNotification } from "../components/Notification";
import ApiUsageTable from "../components/ApiUsageTable";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { allModelNames } from "../allModelsConfig";

export default function DashboardPage() {

    const { data: session, status } = useSession()
    const user = session?.user?.name
    const email = session?.user?.email

    const router = useRouter()
    const searchParams = useSearchParams()

    const [apiKey, setApiKey] = useState("Loading your API Key ....")
    const [testMode, setTestMode] = useState(false)

    useEffect(() => {
        console.log(searchParams.get("test"))
        if (searchParams.get("test") == "true") {
            // alert("Test mode enabled ")
            setTestMode(true)
            setApiKey("test_API_KEY")
        }
    }, [])

    useEffect(() => {
        if (status === "authenticated" && !testMode) {
            (async () => { // immediately invoked function expressions
                let apiKeyOfUser = await (await fetch(`/api/userAPI?email=${email}`)).json()
                setApiKey(apiKeyOfUser.data)
            })();
        }
    }, [status])

    if (status === "loading") return (
        <>
            <div className="w-screen h-screen">
                <Loading message="Preparing Your Dashboard." />
            </div>
        </>
    )

    // middelware is implemented in middelware.ts file to avoid unauthenticated users
    // but still below line also does the same : ) 
    if (status === "unauthenticated") router.push("/api/auth/signin")

    if (status === "authenticated") return (
        <>
            <h1 className="text-5xl sm:text-7xl ml-2 sm:ml-8 font-bold text-left mt-20 leading-0 tracking-tight">Welcome,
                <span className="capitalize">{testMode ? "Test User" : user}</span>
            </h1>
            <div className="flex ml-2 sm:ml-8 justify-left items-center mt-4 flex-wrap">
                <h3 className="text-xl font-semibold text-center leading-0 tracking-tight ">Your Api Key &nbsp;:&nbsp;&nbsp;</h3>
                <div className="flex justify-center items-center h-10 rounded-md border border-stone-900 bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-400 dark:focus:ring-zinc-100 dark:focus:ring-offset-stone-900 w-fit truncate">
                    <input id="api-key" className="pl-2 h-14 w-fit px-4 outline-none bg-transparent" type="text" readOnly={true} value={apiKey} />
                    {
                        apiKey === "Loading your API Key ...." && <svg className="animate-spin mr-2 h-4 w-4 text-black dark:text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                </div>
                <div className="sm:mx-2 my-2 border bg-black text-white dark:bg-white dark:text-black  p-2 rounded-md text-sm" onClick={CopyToClip}>
                    <ToastNotification title="Copied" message="Copy API Key" desc="Text copied to clipboard" />
                </div>
            </div>
            <h3 className="text-xl font-semibold leading-0 tracking-tight sm:m-8">Your API History :</h3>

            {
                testMode && <>
                    <p className="flex items-center text-center w-[95%] m-auto ml-6 bg-black text-white rounded-lg p-2 justify-center
                        font-mono text-sm dark:bg-white dark:text-black ">
                        <InfoCircledIcon className="mx-2" />
                        You are in test mode for developers and recruters. You can make test requests via below links
                    </p>
                    <div className="m-auto flex flex-wrap items-center justify-center mt-6 gap-4">
                        {
                            allModelNames.map((model,id) => {
                                return <Button key={id}><Link href={`/docs/${model}?test=true`}>{model}</Link></Button>
                            })
                        }
                    </div>
                </>
            }

            <ApiUsageTable apiKey={testMode ? "test_API_KEY" : apiKey} />
        </>
    )
}
