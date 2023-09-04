"use client";
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { useState } from "react"

export default function ChatDemo() {
    const [chatMessage, setChatMessage] = useState("")
    const [input,setInput] = useState("")

    async function query(data: { inputs : string }) {
        setChatMessage("loading")
        if(data["inputs"]){
            const response = await fetch(`/api/chatConvo?query=${data["inputs"]}`);
            const result = await response.json();
            setChatMessage(result["generated_text"])
        }
        else{
            let t = "You need to pass a statement for computing sentiments 🥲😑!"
            setChatMessage(t)
        }
    }

    return (
        <div className="lg:w-1/2 lg:m-2 m-6 h-full flex flex-col justify-center pt-8 rounded-lg border dark:border-neutral-700">
            <h1 className="pl-4">🔥 Chat conversation demo</h1>
            <Input placeholder="What would you like to chat about ?" value={input} onChange={(e) => setInput(e.target.value)} className="w-11/12 font-mono m-auto mt-4 h-14" />
            <Button onClick={() => {query({"inputs":input})}} className="w-11/12 m-auto my-4">Send message to bot</Button>
            <div style={{textAlign:chatMessage.length > 7 ? "left" : "center"}} className="w-full h-1/2 pb-2">
                <pre className="font-mono font-thin tracking-tight text-sm whitespace-pre-wrap
                bg-zinc-950 text-neutral-100 dark:bg-zinc-50 dark:text-neutral-950 p-2 rounded-lg w-11/12 m-auto">
                    { chatMessage.length === 0 && <span>Model Output 👇🔥</span> }
                    { chatMessage === "loading" && <span className="animate-pulse">
                        Sending Message <svg className="animate-spin mr-2 h-4 w-4 text-white dark:text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </span> 
                    }
                    { chatMessage.length > 7 && <span>Bot🤖 : {chatMessage}</span> }
                </pre>
            </div>
        </div>
    )
}