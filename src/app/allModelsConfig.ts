export interface modelConfigType {
    name:string,
    description:string,
    sampleQuery:string,
    context:string,
    tags:string[],
    img ?:string
}

export const allModelNames : string[] = [
    "EmailWriter",
    "ChitChat",
    "CodeGenerator",
    "GrammarCorrector",
    "PostCreator",
    "Bulletize",
    "ChefGPT",
    "Sentiments",
    "Scripter",
    "StoryTeller"
]

export const modelConfigurations : modelConfigType[] = [
    {
        name:"EmailWriter",
        description:"Generates an email based on a given topic",
        context:"Given a topic, write emails in a concise, professional manner",
        sampleQuery:"Request for a one week long vaccation from 2nd december to manager",
        tags: ["Text Generation", "English", "LLM"],
        img: ""
    },
    {
        name:"ChitChat",
        description:"A casual chat bot.",
        context:"Based on a given topic or statement chat casually or in a funny way.",
        sampleQuery:"Hi, how's life going these days ?",
        tags: ["Text Generation", "English", "LLM"],
        img: ""
    },
    {
        name:"PostCreator",
        description:"Create's a social media post for given statement.",
        sampleQuery:"Create a LinkedIn post informing connection about my new project 'Free AI' I just completed.",
        context:"Given a topic and name of a social media platform, write a post in a concise manner for it.",
        tags: ["Text Generation", "English", "LinkedIn", "Instagram", "Social Media content"]
    },
    {
        name:"GrammarCorrector",
        description:"Gives suggestion to improve the grammer of the given sentence.",
        context:"Rewrite the following sentence and fix any grammar issues.",
        sampleQuery:"I go the bank, to stick money ATM for retrieval.",
        tags: ["Text Correction", "English", "Grammer", "LLM"]
    },
    {
        name:"Bulletize",
        description:"Extracts important bullet points from any paragraph given as prompt.",
        sampleQuery:"I put my dogs in the back seat, drove to a dog park, played fetch for a few minutes, and then drove home.",
        context:"Covert given paragraph to a list of important bullets points.",
        tags: ["Text Summerization", "English", "LLM", "Important Text Extraction"]
    },
    {
        name:"Sentiments",
        description:"Classify's the sentiment of a sentence",
        sampleQuery:"I would love to walk along the beach.",
        context:"Given a sentence tell me if its sentiment is positive or negative or something in between.",
        tags: ["Text Classification", "English", "Sentiment analysis"]
    },
    {
        name:"Scripter",
        description:"Generates scripts for given scenario.",
        sampleQuery:"A YouTube video about quantum computing.",
        context:"Given a scenario create a script for the characters.",
        tags: ["Text Generation", "English", "Script writter", "LLM"]
    },
    {
        name:"StoryTeller",
        description:"Create's a short story for given characters.",
        sampleQuery:"Krishna, Jeev, Mary",
        context:"Given characters of a story write a short story about them.",
        tags: ["Text Generation", "English", "Story writter", "LLM"]
    },
    {
        name:"CodeGenerator",
        description:"Get code for a given prompt in more than a dozen coding languages.",
        context:"Given a topic or a problem, write clean code in specified programming language.",
        sampleQuery:"Write fizzbuzz in python, along with its explanation in comments.",
        tags: ["Code generation", "Multiple Programming language", "Co-piolet", "Programming Pair"]
    },
    {
        name:"ChefGPT",
        description:"Suggests ideas about what should be made for the dinner given a list of ingredients we have.",
        sampleQuery:"Bread, cheese, tomato's, cucumber",
        context:"Given a list of available ingredients suggest recipes to be cooked.",
        tags : ["Text Generation", "English", "Cooking-Pair", "Dish suggestor"]
    },
]
