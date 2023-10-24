"use client"
import { ToastAction } from "./ui/toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";
import { FeedbackOrWaitlist } from "@/lib/utils";

export default function JoinWaitlist() {
    return (
        <div className="m-auto w-11/12 md:w-1/2 text-center my-24 sm:min-h-screen xl:min-h-full xl:my-48 flex flex-col items-center justify-center">
            <h1 className="heading text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-black tracking-tighter">Join wait list</h1>
            <br/>
            <p className="pp text-sm md:text-md lg:text-xl tracking-tight">
                Ready to revolutionize your AI projects with FREEAI? Kickstart your journey and tap into
                the power of open-source AI today! More models comming soon be notified 😶‍🌫️😆
            </p>
            <br/>
            <form className="w-full" onSubmit={(e) => {
                    e.preventDefault();
                    FeedbackOrWaitlist(e,"join")
                    toast({
                        title:"You are in 🤗🤟",
                        description:"You'll be notified on updates.",
                        action:(<ToastAction altText="Great">Great</ToastAction>)
                    })
                }}>
                <Input required={true} type="email" placeholder="Your email ..."/>
                <Button type="submit" className="heading m-4">Join the AI league</Button>
            </form>
        </div>
    )
}
