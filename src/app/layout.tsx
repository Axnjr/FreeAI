import './assets/globals.css'
import AuthenticationProvider from './AuthProvider'
import { Toaster } from "@/app/components/ui/toaster"
import Navbar from './components/Navbar'
import { GitHubLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Script from 'next/script';
import { Metadata } from "next"
import { siteConfig } from '../../siteConfig'
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	metadataBase:new URL(siteConfig.url),
	title: "FreeAI | v.2.0",
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: siteConfig.author,
	creator: "@Yakshit Chhipa - Axn",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@Yakshit Chhipa - Axn",
	},
}

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "k4mhsumy0a");`

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Script id="ms-clarity" strategy="afterInteractive">
				{clairtyCode}
			</Script>
			<AuthenticationProvider>
				<body suppressHydrationWarning={true} style={{ paddingTop: "2rem" }} className='relative bg-white/75 dark:bg-black text-black dark:text-white'>
					<Navbar />
					<div className='flex flex-col'>{children}</div>
					<SpeedInsights />
					<footer className='flex flex-col bg-neutral-950 dark:bg-neutral-50
					items-center justify-center py-6 border border-neutral-300
					dark:border-neutral-800 sm:h-1/2 text-white dark:text-black'>
						<svg className="w-14 h-14 m-auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
						<div className='flex items-center justify-center m-auto mt-4'>
							<a href='https://github.com/Axnjr'><GitHubLogoIcon className='w-4 h-4 m-2' /></a>
							<a href='mailto:yakshitchhipa@gmail.com'><EnvelopeClosedIcon className='w-4 h-4 m-2' /></a>
							<a href='https://www.linkedin.com/in/yakshit/'><LinkedInLogoIcon className='w-4 h-4 m-2' /></a>
							<a href='https://twitter.com/YC59094'><TwitterLogoIcon className='w-4 h-4 m-2' /></a>
						</div>
						<p className='text-xs sm:text-sm tracking-tight text-center m-2'>© 2023 FREEAI - Made with devotion by <a href='http://axn.vercel.app'> Yakshit Chhipa (axn)</a></p>
					</footer>
					<Toaster />
				</body>
			</AuthenticationProvider>
		</html>
	)
}