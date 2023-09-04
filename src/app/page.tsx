import AiCards from "./components/AiCards"
import JoinWaitlist from "./components/JoinWaitlist"
import { Button } from "./components/ui/button"
const desc1 = "Classify's any text into 28 sentiments labels." //"This Model trained from roberta-base on the go_emotions dataset for multi-label classification. It is a opens source model from hugging face AI Community, which can classify a text to 28 labels."
const desc2 = "A large language model by facebook to chat with." // "A opensource model developed by facebook which is designed to simulate human-like connumations with users. It uses natural language processing (NLP) and complex machine learning algorithms to genrate relavnt responses."
const desc3 = "Summarize's the jist of any paragrph." // "A opensource large language model developed by facebook which is fine tuned and trained on CNN daily mails, , a large collection of text-summary pairs. It can summarize any big paragraphs in short."

export default async function Home() {
	return (
		<>
			<main className="flex flex-col items-center">
				<div className="text-center m-auto flex pt-20 flex-col items-center 
				justify-center w-fit mb-24 sm:min-h-screen">
					<h1 className="leading-tighter heading text-center font-black tracking-tighter 
					text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-0 md:mt-8 mt-0 xl:text-8xl text-black dark:text-white">
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

				<div className="w-screen sm:min-h-screen text-center">
					<h1 className="heading text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-black tracking-tighter mb-12">Services</h1>
					<div id="models" className="flex flex-wrap justify-center items-center">
						<AiCards name="Sentiments AI" desc={desc1} num={1} href="/docs/sentiments" />
						<AiCards name="Conversation AI" desc={desc2} num={2} href="/docs/chatConvo" />
						<AiCards name="Summarization AI" desc={desc3} num={3} href="/docs/summarize" />
					</div>
				</div>
				<JoinWaitlist/>
			</main>
		</>
	)
}