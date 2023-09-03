import { prismaDB } from './prismaDb'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from "next-auth/providers/discord";

// function getGoogleCredentials(): { clientId: string; clientSecret: string } {
// 	const clientId = process.env.GOOGLE_CLIENT_ID
// 	const clientSecret = process.env.GOOGLE_CLIENT_SECRET

// 	if (!clientId || clientId.length === 0) {
// 	  throw new Error('Missing GOOGLE_CLIENT_ID')
// 	}

// 	if (!clientSecret || clientSecret.length === 0) {
// 	  throw new Error('Missing GOOGLE_CLIENT_SECRET')
// 	}

// 	return { clientId, clientSecret }
// }

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
  	adapter: PrismaAdapter(prismaDB),
	session: { strategy: 'jwt' },

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
	  DiscordProvider({
		clientId: process.env.DISCORD_CLIENT_ID!,
		clientSecret: process.env.DISCORD_CLIENT_SECRET!,
	  })
    ],
	// copied as it is from next-auth docs
	callbacks: {

		async session({ token, session }) {
			if (token) {
				// by explanation mark we tell's TS that we know this property exists.
				session.user!.id = token.id
				session.user!.name = token.name
				session.user!.email = token.email
				session.user!.image = token.picture
			}
			return session
		},

		async jwt({ token, user }) {
			const dbUser = await prismaDB.user.findFirst({
				where: {
				email: token.email,
				},
			})
	
			if (!dbUser) {
				token.id = user!.id
				return token
			}
	
			return {
				id: dbUser!.id,
				name: dbUser!.name,
				email: dbUser!.email,
				picture: dbUser!.image,
			}
		},

		redirect() {
		  return '/dashboard'
		},
	},
}

/**
 * 
 * @returns TOKEN --------------> {
  name: 'yakshit chhipa',
  email: 'yakshitchhipa@gmail.com',
  picture: 'https://lh3.googleusercontent.com/a/AAcHTtd4m8u_WOe6qp8FHCp-e-cGYsEwOzZcZwR7fcOI=s96-c',
  sub: '113292564218030841221',
  iat: 1687145894,
  exp: 1689737894,
  jti: '85ac1ca1-96f5-40c8-b55b-11e0a314799e'
}
SESSION ------------> {
  user: {
    name: 'yakshit chhipa',
    email: 'yakshitchhipa@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/AAcHTtd4m8u_WOe6qp8FHCp-e-cGYsEwOzZcZwR7fcOI=s96-c'
  },


 callbacks:{
        async session({ token , session }){
            console.log("TOKEN -------------->",token);
            console.log("SESSION ------------>",session)
			const newUser = await prismaDB.user.create({
				data : {
					id:"1stuser",
					name:"radhaKrishna",
					email:"mprk@gmail.com",
					apiKey:"1q2w3e4r5t6y7u8i93sd45fg6h7j8",
					
				}
			})
			.then(res => console.log("CREATED NEW USER GOT RESPONSE --- ",res))
			.catch(err => console.log("UNABLE TO CREATE USER GOT THIS ERROR --- ",err))
            return session
        }
    },
    // debug:true

 */

export const getAuthSession = () => getServerSession(authOptions) // to get data all around the app .