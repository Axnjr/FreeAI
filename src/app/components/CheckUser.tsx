import Link from 'next/link'
import { Button } from '@/app/components/ui/button';
export default function CheckUser({ user } : { user : string }){
    return (
        <>
            {
                user 
                    ? 
                <div>
                    <Button variant="ghost" className='text-sm sm:text-lg font-semibold -ml-2 sm:ml-2'><Link href="/dashboard">Dashboard</Link></Button>
                </div>
                    : 
                <Button variant="default" className='hidden sm:block sm:ml-2'>
                    <Link href="/api/auth/signin">Sign In</Link>
                </Button>
            }
        </>
    )
}