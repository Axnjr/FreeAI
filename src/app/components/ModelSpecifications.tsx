import Link from "next/link"
import Code from "./Code"
import { modelConfigType } from "../allModelsConfig"

export default function ModelSpecifications({ config }: { config: modelConfigType }) {
    return (
        <div className="model_doc lg:w-3/5 m-2 px-4 lg:pl-6 h-full">

            <div>
                <h1 className="flex items-center tracking-tight font-black mt-4">
                    <span className='relative flex rounded-full mr-2 lg:mr-4 h-6 w-6 bg-gradient-to-r from-amber-500 via-lime-300 to-blue-500'></span>
                    <span className="heading text-5xl capitalize font-black tracking-tighter">{config.name}</span>
                </h1>

                <p className=" text-xl tracking-normal my-6">{config.description}</p>

                <section className="flex flex-wrap mt-1 -ml-2">
                    {
                        config.tags.map((tag, id) => <span key={id} className="rounded-3xl border-2 dark:border-neutral-700
                        text-xs font-bold py-2 px-4 m-1 border-neutral-200"><p>{tag}</p>
                        </span>)
                    }
                </section>
            </div>

            <section className="mt-4">
                <h1 className="font-bold text-xl mt-4 mb-2 dark:text-white text-black">Usage</h1>
                <p className="text-md font-sans font-normal tracking-tight text-neutral-700 dark:text-neutral-400 ">
                    You can get started directly by fetching the base url given below + the model name you want to use and your query ex: ?q="{config.sampleQuery}", <br />
                    <code className="w-full block whitespace-nowrap mt-4 bg-zinc-950 p-2 text-neutral-400 rounded-lg border border-neutral-800">
                        <span className="hljs-attribute">Base URL:</span><span className="hljs-formula"> https://freeaiapi.vercel.app/api/</span>
                    </code><br />
                    However, if you want to see your API history and get optimized server response while traffic you can
                    <Link href={"/api/auth/signin"} className="text-blue-500 underline"> sign in </Link>to get a APIKEY and pass it as a last parameter (APIKEY).
                    <br />
                    <br />
                    <code className="w-full block whitespace-nowrap bg-zinc-950 p-2 text-neutral-400 rounded-lg border border-neutral-800 overflow-x-auto">
                        <span className="hljs-attribute">URL : </span><span className="hljs-formula">BASEURL + { config.name } +
                            ?query="<span className="hljs-link">{config.sampleQuery}</span>
                            "&apikey="<span className="hljs-link">KEY(optional)</span>"</span><br />
                    </code>
                </p>
            </section>

            <br />

            <div className="text-left p-4 bg-zinc-950 overflow-x-scroll whitespace-nowrap dark:bg-zinc-950 rounded-lg border dark:border-neutral-800">
                <Code method="fetch" />
            </div>
        </div>
    )
}
