"use client"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { modelConfigType } from "../allModelsConfig"
import { useState, useRef } from "react"

export default function Demo({ config, test }: { config: modelConfigType, test?: string }) {

    const [response, setResponse] = useState("")
    const [timer,setTimer] = useState(0)
    const interval = useRef()

    async function incrementTimer() {
        // @ts-ignore
        interval.current = setInterval(() => {
            setTimer(prev => prev + 1)
        },100)
    }

    async function getResponse(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setResponse("Loading")
        incrementTimer()

        // @ts-ignore
        let temp = await (await fetch(`/api/${config.name}?query="${e.target[0].value}"`)).json()
        setResponse(temp.content)
        clearInterval(interval.current)
    }

    return (
        <div className="lg:w-1/2 lg:m-2 m-6 h-full flex flex-col justify-center pt-8 rounded-lg border dark:border-neutral-700 text-center">

            <h1 className="heading pl-4 text-2xl my-4 font-black  capitalize">🔥 {config.name} demo</h1>

            <form onSubmit={(e) => getResponse(e)}>
                <Input placeholder="What would you like to chat about ?" name="query" className="w-11/12 m-auto mt-4 h-14 bg-neutral-50 dark:bg-neutral-50/10" />
                <Button type="submit" className="w-11/12 m-auto my-4 font-medium tracking-tight">
                    Run query
                    <svg className="w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                </Button>
            </form>

            <div className="w-full h-fit pb-2">
                    {
                        response == "Loading" 
                            ? 
                        <span className="flex items-center p-2 mb-4 w-11/12 m-auto text-sm animate-pulse rounded-md bg-neutral-900/10 dark:bg-neutral-50/10">
                            Generating response <span className="text-xs"> ( {timer}ms ) ...</span>
                        </span>
                            :
                        response == ""
                            ?
                        null
                            :
                        <p className="text-left w-11/12 m-auto text-sm rounded-md bg-neutral-50 dark:bg-neutral-50/10 p-4 tracking-wide font-sans">
                            {
                                response.split("**").map((token,id) => {
                                    return <>
                                        <span key={id}>{token}</span>
                                        <br/>
                                        <br/>
                                    </>
                                })
                            }
                            <br/>
                            <br/>
                            <span className="text-xs font-semibold rounded-lg py-1 px-2 bg-lime-400 text-black">Model took {timer / 100}s to respond.</span>
                        </p>
                    }
            </div>
        </div>
    )
}