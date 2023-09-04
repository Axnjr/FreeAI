"use client"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"

export default function SummarizationDemo() {

    const [chatMessage, setChatMessage] = useState("")
    const [input, setInput] = useState("")

    async function query(data: string) {
        setChatMessage("loading")
        if (data) {
            const response = await fetch(`/api/summarize?query=${data}`);
            const result = await response.json();
            setChatMessage(result[0]["summary_text"])
        }
        else {
            let t = "You need to pass a statement for computing sentiments 🥲😑!"
            setChatMessage(t)
        }
    }

    return (
        <div className="lg:w-1/2 lg:m-2 m-6 h-full flex flex-col justify-center pt-8 rounded-lg border dark:border-neutral-700">
            <h1 className="pl-4">🔥 Text summerization demo</h1>
            <textarea id="text" placeholder="Your paragraph ..." value={input} onChange={(e) => setInput(e.target.value)} className="w-11/12 m-auto mt-4 p-4 font-mono tracking-tight border dark:border-neutral-700 rounded-lg bg-transparent" />
            <Button onClick={() => query(input)} className="w-11/12 m-auto my-4">Summerize the text</Button>
            <div className="w-full h-1/2 pb-2">
                <p className="font-mono font-thin tracking-tight text-sm text-center
                bg-zinc-950 text-neutral-100 dark:bg-zinc-50 dark:text-neutral-950
                p-2 rounded-lg w-11/12 m-auto">
                    {chatMessage.length === 0 && <span>Model Output 👇🔥</span>}
                    {chatMessage === "loading" && <span className="animate-pulse">
                        Summarizing your text <svg className="animate-spin mr-2 h-4 w-4 text-white dark:text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>
                    }
                    {chatMessage.length > 7 && <p className="text-left">
                        <span className="font-bold text-red-600">Your Summary 📰👉 : </span>
                        {chatMessage}</p>}
                </p>
            </div>
        </div>
    )
}