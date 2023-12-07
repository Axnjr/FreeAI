"use client"
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

export default function AuthenticationProvider({children} : { children: React.ReactNode }) {
	return (
		<SessionProvider>
			{children}
		</SessionProvider>
	)
}