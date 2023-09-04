import ModelSpecifications from "@/app/components/ModelSpecifications"
import SentimentsDemo from "@/app/components/demos/SentimentsDemo"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'FREEAI | Docs - Sentiments AI | sentiments',
}

const aboutModel = "This Model trained from roberta-base on the go_emotions dataset for multi-label classification. It is a opens source model from hugging face AI Community, which can classify a text to 28 labels ➡️"
const modelName = "SamLowe/roberta-base-go_emotions↗️"
const Modelhref = "https://huggingface.co/SamLowe/roberta-base-go_emotions"
const name = "sentiments"
const tags = [
    ["Sentiment classification",""],
    ["English",""],
    ["go emotions dataset","https://huggingface.co/datasets/go_emotions"]
]

export default function page() {
    return (
        <div className="pt-12 text-left w-full min-w-screen mb-12 lg:flex">
            <ModelSpecifications aboutModel={aboutModel} Modelhref={Modelhref} genralModelName={name} name={modelName} tags={tags} query="You are a dumbo !"/>
            <SentimentsDemo/>
        </div>
    )
}