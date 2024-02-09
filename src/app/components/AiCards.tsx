import Link from "next/link"
import { Button } from "./ui/button"
import { modelConfigurations } from "../allModelsConfig"

export default function AiCards() {
    return (
        <>
            {
                modelConfigurations.map((model, id) => {
                    return <Link key={id} className="mx-6 my-6 shadow-md dark:hover:border-neutral-200 text-left items-start
                    dark:shadow-neutral-700 hover:shadow-2xl w-11/12 md:w-1/3 lg:w-1/4  border-neutral-300 flex flex-col
                    dark:border-neutral-600 rounded-md h-52 bg-neutral-200 dark:bg-neutral-900 justify-center p-4"  
                    href={`/docs/${model.name}`}>
                        <h1 className="text-2xl m-4  font-black text-left heading">{model.name}</h1>
                        <p className="pp text-sm tracking-tight leading-5 m-4">{model.description}</p>
                        <Button className="pp mx-4">Use Model</Button>
                    </Link>
                })
            }
        </>
    )
}