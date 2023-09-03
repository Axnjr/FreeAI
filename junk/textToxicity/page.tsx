"use client";import { useState } from "react"
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import * as toxicity from '@tensorflow-models/toxicity';
// import '@tensorflow/tfjs-backend-webgl';

export default function ToxicTextPrompt() {

    const [promptRes, setPromptRes] = useState([""])

    async function HandlePrompt(e: React.SyntheticEvent) {
        setPromptRes(["Loading..."])
        e.preventDefault();
        const prompt = e.target[0].value;
        if (prompt.length === 0) {
            setPromptRes([...["Prompt is empty"]]) ; return ;
        }
        const model: any = await toxicity.load(0.9, []); // 0.9 is threeshold value 
        const ans = await model.classify(prompt)
        const result: string[] = []
        for (let label of ans) {
            let toxicityPercentage = Math.round(label.results[0].probabilities[1]*100);
            result.push(`${label.label.toUpperCase()} : ${toxicityPercentage}% Probablity hence match ${label.results[0].match}`)
        }
        setPromptRes([...result]);
    }

    return (
        <>
            <div id="ttp" className="prompt text-left h-full">
                <h1 id="bold" className="text-7xl font-extrabold mb-4">Text Toxicity AI</h1>
                <form onSubmit={(e) => HandlePrompt(e)} className="rounded border border-neutral-400 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 dark:text-white text-stone-700">
                    <div className="flex justify-center items-center">
                        <Input className="border-0 outline-none" type="text" placeholder="A toxic prompt .."/>
                        {
                            promptRes[0] === "Loading..." && <svg className="animate-spin ml-4 mr-4 h-6 w-6 text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                        <Button type="submit">Validate</Button>
                    </div>
                    {
                        promptRes && <ul id="noscrollbar" className="overflow-y-scroll rounded-md text-left h-9 w-full border-neutral-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors dark:border-neutral-800 dark:bg-neutral-950 border-0 outline-none" 
                            style={{ display: promptRes[0].length !== 0 ? "block" : "none", height : promptRes.length === 1 ? "auto" : "5rem", scrollbarWidth:"none", marginBlock:"1px" }} >
                            {
                                promptRes.map((ele, id) => {
                                    return <li className="p-2" key={id}><span className="text-xs">Tags↪️</span> {ele}</li>
                                })
                            }
                        </ul>
                    }
                </form>
            </div>
        </>
    )
}