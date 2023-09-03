import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Capitalize } from '@/lib/utils';
import { Button } from './ui/button';
import { ToastAction } from "./ui/toast"
import { useToast } from "./ui/use-toast"

interface props {
    user: string;
    email: string;
    signOut: Function;
    signIn: Function;
    status: undefined | string;
}

export default function Profile({ user, email, signOut, signIn, status }: props) {
    const { toast } = useToast()

    async function deleteUser(user_email: string) {
        await fetch(`/api/getusers?user_email=${user_email}`,{ method:"DELETE" })
        toast({
            variant: "destructive",
            title: "Account deleted successfully 🫡🙏",
            action: (
                <ToastAction altText='Nice'>Nice !!</ToastAction>
            )
        })
        setTimeout(() => {window.location.reload()}, 1000)
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className='p-2 rounded-md z-50'>
                <svg className="w-[19px] h-[19px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal className='text-right'>
                <DropdownMenu.Content style={{ padding: "4px" }} className='shadow-2xl border dark:border-neutral-600 shadow-neutarl-300 rounded-md bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-white'>

                    <DropdownMenu.Item style={{ padding: "10px" }} className="text-sm rounded-md cursor-pointer outline-none hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
                        <h1 className='flex items-center'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full mr-2 h-3 w-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></span>
                            {Capitalize(user ? user.split(" ")[0] : "NotSignedIn")}
                        </h1>
                        <span style={{ fontSize: "10px" }}>{email ? email : "youremail@gmail.com"}</span>
                    </DropdownMenu.Item>

                    <div style={{ height: "0.5px", marginBlock: "1px" }} className='w-full bg-slate-500'></div>
                    <DropdownMenu.Arrow />

                    <DropdownMenu.Item style={{ padding: "6px" }} className="text-sm cursor-pointer rounded-md outline-none hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
                        {
                            status === "authenticated" ? <h1 className='flex items-center'
                                onClick={() => signOut({ callbackUrl: "/" })}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[19px] h-[19px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                &nbsp;&nbsp;SignOut
                            </h1>
                                :
                                <h1 className='flex items-center'
                                    onClick={() => signIn()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[19px] h-[19px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                    &nbsp;&nbsp;SignIn
                                </h1>
                        }
                    </DropdownMenu.Item>
                    {
                        status === "authenticated" && <DropdownMenu.Item>
                            <Button variant="outline" onClick={() => {
                                toast({
                                    variant: "default",
                                    title: "Do you want to delete your account !!",
                                    action: (
                                        <ToastAction onClick={() => deleteUser(email)} altText="Delete account">Yes delete it </ToastAction>
                                    ),
                                })
                            }}>
                                Delete Account
                            </Button>
                        </DropdownMenu.Item>
                    }
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}