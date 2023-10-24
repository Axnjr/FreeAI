import ModelSpecifications from "@/app/components/ModelSpecifications"
import SummarizationDemo from "@/app/components/demos/SummarizationDemo"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'FREEAI | Docs - Summarization AI | summarize',
}

const aboutModel = "A opensource large language model developed by facebook which is fine tuned and trained on CNN daily mails, , a large collection of text-summary pairs. It can summarize any big paragraphs in short."
const modelName = "facebook/bart-large-cnn ↗️"
const Modelhref = "https://huggingface.co/facebook/bart-large-cnn"
const tags = [
    ["Summarization","https://huggingface.co/models?pipeline_tag=summarization"],
    ["English",""],
    ["CNN Daily Mail","https://huggingface.co/models?dataset=dataset%3Acnn_dailymail"],
    ["facebook","https://huggingface.co/facebook"],
]

type Props = {
    searchParams?: {
        test?: string;
    };
};

export default function page(props: Props) {

    const { searchParams } = props

    return (
        <div className="pt-12 text-left w-full min-w-screen mb-20 lg:flex">
            <ModelSpecifications aboutModel={aboutModel} Modelhref={Modelhref} genralModelName={"summarize"} name={modelName} tags={tags} query="The Eiffel Tower is the second tallest ...."/>
            <SummarizationDemo test={searchParams?.test}/>
        </div>
    )
}