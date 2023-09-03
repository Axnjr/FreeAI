import { type ClassValue, clsx } from "clsx"
import { FormEvent } from "react"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function Capitalize(str : string){
  if(str){
      let first_alphabet = str[0].toUpperCase()
      let remaining_str = str.slice(1,str.length)
      // console.log(first_alphabet+remaining_str)
      return first_alphabet+remaining_str
  }
  return str
}

export async function CopyToClip(){
  // @ts-ignore: Unreachable code error
  var copyText = document.getElementById("api-key").value;
  await navigator.clipboard.writeText(copyText);
}

export async function FeedbackOrWaitlist(e : FormEvent, action : "feedback" | "join"){
  e.preventDefault();
  try {
      // @ts-ignore
      let t = await fetch(`/api/joinfeed?query=${e.target[0].value}&action=${action}`,{method:"POST"})
      console.log(t)
  } catch (error) {
  console.log("Unable to update waitlist server is not responding | STATUS : 500")   
  }
}