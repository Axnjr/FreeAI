import AiCards from "./components/AiCards"
import JoinWaitlist from "./components/JoinWaitlist"
import { Button } from "./components/ui/button"

export default async function Home() {
	return (
		<>
			<main className="flex flex-col items-center">
				<div className="text-center m-auto flex sm:pt-32 lg:pt-20 flex-col items-center 
				justify-center w-fit mb-20 xl:min-h-fit">
					<h1 className="leading-tighter heading text-center font-black tracking-tighter 
					text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-6 mt-20 xl:mt-12
					 text-black dark:text-white">
						Enable Your apps with <br />
						<span id="two" style={{lineHeight:"1.5"}}> powerful </span>
						<span id="thr" className="bg-gradient-to-r from-amber-500 via-lime-300 to-blue-600 rounded-xl px-1 text-black"> AI Models</span> for free.
					</h1>
					<br/>
					<h1 className="pp text-xl xl:text-xl m-auto w-10/12 sm:w-3/2 tracking-normal text-black dark:text-white text-center leading-tight mt-8">
						Leverage opensource large language models from the big tech in one fetch.
						Sign in for optimized response and api details or
						<br/>
						<Button className="heading hover:bg-transparent dark:hover:bg-black
						hover:text-black dark:hover:text-white border-black dark:border-white 
						hover:border-2 mt-12 sm:mt-4">
							<a href="#models">Get Started directly.</a>
						</Button>
					</h1>
				</div>

				<div className="w-screen sm:min-h-screen text-center xl:min-h-fit">
					<h1 className="heading text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mt-12 mb-24">All Models</h1>
					<div id="models" className="flex flex-wrap justify-center items-center">
						<AiCards/>
					</div>
				</div>
				<JoinWaitlist/>
			</main>
		</>
	)
}