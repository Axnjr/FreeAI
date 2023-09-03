import Link from "next/link"
import Code from "./Code"

export default function ModelSpecifications({name, Modelhref, aboutModel, genralModelName, tags, query } : { name : string, Modelhref : string, aboutModel : string, genralModelName : string, tags : string[][], query : string }) {
    return (
        <div className="model_doc lg:w-3/5 m-2 px-4 lg:pl-6 h-full">
            <div>
                <code className="flex items-center text-lg lg:text-xl font-semibold tracking-tighter">
                    <span className='relative flex rounded-full mr-1 lg:mr-2 h-4 w-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
                    <a href={Modelhref}>{name}</a>
                </code>
                <section className="flex flex-wrap mt-1 -ml-2">
                {
                    tags.map((tag,id) => <span key={id} className="rounded-3xl border dark:border-neutral-700
                        text-xs font-light p-2 m-1"><a href={tag[1]}>{tag[0]}</a>
                    </span> )
                }
                </section>
            </div>
            <section className="mt-4">
                <h1 className="font-bold font-mono text-xl dark:text-white text-black my-2">About the model</h1>
                <p className="text-md font-sans font-normal tracking-tight text-neutral-700 dark:text-neutral-400 ">
                    {aboutModel}
                </p>
                <h1 className="font-bold font-mono text-xl mt-4 mb-2 dark:text-white text-black">Usage</h1>
                <p className="text-md font-sans font-normal tracking-tight text-neutral-700 dark:text-neutral-400 ">
                    You can get started directly by fetching the base url given below + the model name you want to use and your query ex: ?q="{query}", <br />
                    <code className="w-full block whitespace-nowrap mt-4 bg-zinc-950 p-2 text-neutral-400 rounded-lg border border-neutral-800">
                        <span className="hljs-attribute">Base URL:</span><span className="hljs-formula"> http://freeai.com/api/</span>
                    </code><br />
                    However, if you want to see your API history and get optimized server response while traffic you can
                    <Link href={"/api/auth/signin"} className="text-blue-500 underline"> sign in </Link>to get a APIKEY and pass it as a last parameter (APIKEY).
                    <br />
                    <br />
                    <code className="w-full block whitespace-nowrap bg-zinc-950 p-2 text-neutral-400 rounded-lg border border-neutral-800 overflow-x-auto">
                        <span className="hljs-attribute">URL:</span><span className="hljs-formula">BASEURL + {genralModelName} +
                            ?q="<span className="hljs-link">{query}</span>
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
