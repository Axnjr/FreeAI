import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
	console.log("middleware executed")
	const token = await getToken({ req })
	console.log(token)
	if(token === null) {
		return NextResponse.redirect(new URL('/api/auth/signin', req.nextUrl))
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/dashboard/:path*',
}