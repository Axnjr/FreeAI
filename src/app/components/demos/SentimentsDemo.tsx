"use client"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"

export default function SentimentsDemo() {

    const [jsonData, setJsonData] = useState([["MODEL OUTPUT 👇"]])
    const [input,setInput] = useState("")
    const [loading,setLoading] = useState(false)

    async function query(data: string) {
        setLoading(true)
        if(data){
            const response = await fetch(`/api/sentiments?query=${data}`);
            const result = await response.json();
            setJsonData([...result])
            // return result;
        }
        else {
            let t = ["You need to pass a statement for computing sentiments 🥲😑!"]
            setJsonData([...[t]])
        }
        setLoading(false)
    }

    return (
        <div className="model_demo lg:w-1/2 lg:m-2 m-6 h-full flex flex-col justify-center pt-8 rounded-lg border dark:border-neutral-700">
            <h1 className="pl-4">🔥 Sentiment Classification demo</h1>
            <Input placeholder="Any statement ..." value={input} onChange={(e) => setInput(e.target.value)} className="w-11/12 m-auto mt-4 h-14" />
            <Button onClick={() => query(input)} className="w-11/12 m-auto my-4 flex items-center">
                Compute sentiments <svg style={{ display: loading ? "block" : "none" }} className="animate-spin ml-2 h-4 w-4 text-white dark:text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </Button>
            <div className="w-full h-full text-center">
                <pre className="m-auto p-4 max-h-full overflow-y-scroll">
                    {
                        jsonData[0].map((label, id) => {
                            // @ts-ignore
                            if (label.label && label.score) return <div key={id}>
                                <div style={{// @ts-ignore
                                    width: label.score * 100 / 3 + "rem", height: "5px"
                                }} className="bg-sky-500 rounded-3xl"></div>
                                <div className="flex justify-between text-xs my-2">
                                    <span>{
                                        // @ts-ignore
                                        label.label}</span>
                                    <span>{// @ts-ignore
                                        Math.round(label.score * 100)}%</span>
                                </div>
                            </div>
                            else {
                                return <div key={id} className="pl-4 text-sm text-center text-neutral-500">
                                    {label}<br /><br />
                                    <p className="text-left whitespace-break-spaces">
                                        Model Labels : disappoinent, sadness, anger, realization, nervousness, joy, disgust, grief, love,
                                        fear, pride, surprise, gratitude, curiosity, amusement, optimsim, desire, relief, confusion etc ...</p>
                                </div>
                            }
                        })
                    }
                </pre>
            </div>
        </div>
    )
}