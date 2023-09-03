// useless
"use client"
import { useToast } from "@/app/components/ui/use-toast"
export const ToastNotification = ({ title, message, desc } : { title : string, message : string, desc : string }) => {
    const { toast } = useToast()
    return (
        <button 
            onClick={() => {
            toast({
                    className:"bg-stone-900 border text-white dark:bg-white dark:text-stone-900",
                    title: title,
                    description: desc,//"API Key copied to clipboard.",
                    duration:1200,
                })
            }}
            >
            {message}
        </button>
    )
}
  

