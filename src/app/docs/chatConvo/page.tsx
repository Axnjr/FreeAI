import ChatDemo from "@/app/components/demos/ChatDemo"
import ModelSpecifications from "@/app/components/ModelSpecifications"
import { Metadata } from "next"
const aboutModel = "A opensource model developed by facebook which is designed to simulate human-like conversations with users. It uses natural language processing (NLP) and complex machine learning algorithms to genrate relavnt responses."
const Modelhref = "https://huggingface.co/facebook/blenderbot-400M-distill"
const tags = [
    ["Text2Text genaration","https://huggingface.co/models?other=text2text-generation"],
    ["facebook","https://huggingface.co/facebook"],
    ["chat bot",""],
    ["Conversational"]
]

export const metadata: Metadata = {
    title: 'FREEAI | Docs - ConversationAI | chatConvo',
}

export default function page() {
    return (
        <div className="pt-12 text-left w-full min-w-screen mb-20 lg:flex">
            <ModelSpecifications aboutModel={aboutModel} Modelhref={Modelhref} genralModelName="chatConvo" name="facebook/blenderbot-400M-distill ↗️" tags={tags} query="Hi, how are you doing ? Can you tell where is Paris ?"/>
            <ChatDemo/>
        </div>
    )
}