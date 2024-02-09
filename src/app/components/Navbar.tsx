"use client";
import Link from "next/link"
import Modes from "./modes"
import CheckUser from "./CheckUser"
import Profile from "./Profile"
import { useSession, signOut, signIn } from "next-auth/react"
import { Feedback } from "./Feedback";
import GitHubButton from 'react-github-btn'
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
    
    const { data: session, status } = useSession()
    const user: any | string = session?.user?.name;
    const email: any | string = session?.user?.email

    return (
        <nav className="pp p-4 2xl:max-w-[90%] m-auto absolute brder dark:border-neutral-900 border-neutral-200 bg-white dark:bg-black z-32 top-0 left-0 right-0 flex items-center justify-between">
            <div className="flex items-center">
                <Link className="mr-6 flex items-center space-x-2" href="/">
                    <svg className="w-8 h-8 -mr-2 text-white p-1 rounded-2xl bg-black dark:bg-white dark:text-black" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <span style={{WebkitTextStroke:"0.5px black"}} className="text-2xl font-black tracking-wide sm:inline-block">&nbsp;freeAI</span>
                </Link>
                
            </div>
            <div className="flex items-center">
                <div style={{ margin: "2px" }} className='rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2'>
                    <Modes />
                </div>
                <div style={{ margin: "2px" }} className='rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 '>
                    <a href='https://twitter.com/YC59094'><TwitterLogoIcon className='w-9 h-9 p-2'/></a>
                </div>
                <div style={{ margin: "2px" }} className='rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 '>
                    <a href='https://github.com/Axnjr/FreeAI'><GitHubLogoIcon className='w-9 h-9 p-2'/></a>
                </div>
                <div style={{ margin: "2px" }} className='rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 '>
                    <Profile user={user} email={email} signOut={signOut} signIn={signIn} status={status} />
                </div>
                <Feedback/>
                <CheckUser user={user} />
            </div>

           {/* <div className="ml-2 mr-2 lg:ml-6 lg:mr-6 md:ml-4 md:mr-4 flex items-center">
                
                
           </div> */}
        </nav>
    )
}