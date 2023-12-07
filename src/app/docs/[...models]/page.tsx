import Demo from "@/app/components/Demo";
import "../../assets/globals.css"
import { allModelNames, modelConfigurations } from "@/app/allModelsConfig";
import ModelSpecifications from "@/app/components/ModelSpecifications";
import { notFound } from 'next/navigation'

export default function page({ params, searchParams } : { params : { models : string }, searchParams?: { test ?: string } }) {

    if(!allModelNames.includes(params.models[0])){
        notFound()
    }

    let temp = modelConfigurations.filter((model) => {
        return model.name == params.models[0] ?? model
    })

    return (
        <div className="pt-12 text-left w-full min-w-screen mb-20 lg:flex">
            <ModelSpecifications 
                config={temp[0]}
            />
            <Demo config={temp[0]} test={searchParams?.test} />
        </div>
    )
}