"use client"
import { AlertDialog, AlertDialogAction, AlertDialogContent,
AlertDialogDescription, AlertDialogCancel, AlertDialogHeader,
AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ComponentProps } from "react"
import { FeedbackOrWaitlist } from "@/lib/utils"

export function Feedback() {   // {...props} : ComponentProps<"button">

    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                {/* @ts-ignore */}
                <Button variant="ghost" className="hidden sm:flex text-sm sm:text-lg font-semibold" >Feedback</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="text-center">
                <AlertDialogHeader>

                    <AlertDialogTitle className="text-center">
                        <svg className="w-12 h-12 inline-block" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-center text-md tracking-wide">
                        I'd love to hear from you, even if it's just a smiley face 🙂
                    </AlertDialogDescription>
                    <form onSubmit={(e) => FeedbackOrWaitlist(e,"feedback")} className="w-full text-center space-x-2">
                        <Input id="wtlist" className="w-full" type="text" placeholder="Your views matter a lot .." />
                        <AlertDialogAction type="submit" className="mt-6">
                            Submit
                        </AlertDialogAction>
                        <AlertDialogCancel>Maybe Later</AlertDialogCancel>
                    </form>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}
