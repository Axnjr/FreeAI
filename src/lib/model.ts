import { DiscussServiceClient, TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

const API_KEY: string | undefined = process.env.NEXT_PUBLIC_PALM_API_TOKEN;
const googleAuth = new GoogleAuth().fromAPIKey(API_KEY as string)

if (!API_KEY) {
    throw Error("Palm api key not found in .env file !")
}

const client = new DiscussServiceClient({ // for discussion / chat services
    authClient: googleAuth,
});

export async function modelResponse(input: string, context ?: string) {

    console.log("Generating responses ...")
  
    try {
        const response = await client.generateMessage({
            model: "models/chat-bison-001",
            prompt: {
                context: context,
                messages: [
                    {"content":input}
                ],
            }
        })
  
        var result: any = response[0].candidates 
            ? 
        response[0].candidates[0] 
            : 
        "Internal error : Model returned unexpected output";
    } 
  
    catch (error) {
        var result: any = "Model took too long to load, try again sorry!"
    }
  
    console.log("Model Output :",result)

    // await new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //         resolve()
    //     }, 1000)
    // })
  
    return result;
}