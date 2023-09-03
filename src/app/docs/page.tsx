import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Code from "../components/Code"
export default function page() {
    return (
        <div className="pt-20 text-center w-screen mb-20">
			<h1 className="text-center text-5xl font-extrabold tracking-tighter">Making a <span className="blue">API</span> Request</h1>
			<br/>
			<Tabs defaultValue="fetch">
				<TabsList className="bg-neutral-100 text-black rounded-md ">
					<TabsTrigger className="font-extrabold" value="fetch">Using Fetch API</TabsTrigger>
					<TabsTrigger className="font-extrabold" value="axios">Using Axios</TabsTrigger>
					<TabsTrigger className="font-extrabold" value="query">Using React Query</TabsTrigger>
				</TabsList>
				<br/>
				<br/>
				<TabsContent value="fetch">
					<div className="text-left inline-block w-fit mx-12 p-4 bg-zinc-950 rounded-lg border dark:border-neutral-800">
						<Code method="fetch"/>
					</div>
				</TabsContent>
				<TabsContent value="axios">
					<div className="text-left inline-block w-fit mx-12 p-4 bg-zinc-950 rounded-lg border dark:border-neutral-800">
						<Code method="axios"/>
					</div>
				</TabsContent>
				<TabsContent value="query">
					<div className="text-left inline-block w-fit mx-12 p-4 bg-zinc-950 rounded-lg dark:bg-zinc-950 border dark:border-neutral-800">
						<Code method="query"/>
					</div>
				</TabsContent>
			</Tabs>
        </div>
    )
}