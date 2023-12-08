import './assets/globals.css'
import AuthenticationProvider from './AuthProvider'
import { Toaster } from "@/app/components/ui/toaster"
import Navbar from './components/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
	title: "FreeAI | v.2.0",
	description: `
		Easily enable your apps with powerfull Artificial intelligent models for free 100%. 
		Leverage opensource large language models from the big tech companies in one fetch.
		Sign in for optimized response and api details or get started directly. Opensource 
		models from the AI community of huggingface without any complexity of access tokens
		pipelines and transformers just fetch and use all for free.
	`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<SpeedInsights/>
			<AuthenticationProvider>
				<body suppressHydrationWarning={true} style={{ paddingTop: "2rem" }} className='relative bg-white/75 dark:bg-black text-black dark:text-white'>
					<Navbar />
					<div className='flex flex-col'>{children}</div>
					<footer className='flex flex-col bg-neutral-950 dark:bg-neutral-50
					items-center justify-center py-6 border border-neutral-300
					dark:border-neutral-800 sm:h-1/2 text-white dark:text-black'>
						<svg className="w-14 h-14 m-auto" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 7.50002C0.900024 3.85495 3.85495 0.900024 7.50002 0.900024C11.1451 0.900024 14.1 3.85495 14.1 7.50002C14.1 11.1451 11.1451 14.1 7.50002 14.1C3.85495 14.1 0.900024 11.1451 0.900024 7.50002ZM7.50002 1.80002C4.35201 1.80002 1.80002 4.35201 1.80002 7.50002C1.80002 10.648 4.35201 13.2 7.50002 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.35201 10.648 1.80002 7.50002 1.80002ZM3.07504 7.50002C3.07504 5.05617 5.05618 3.07502 7.50004 3.07502C9.94388 3.07502 11.925 5.05617 11.925 7.50002C11.925 9.94386 9.94388 11.925 7.50004 11.925C5.05618 11.925 3.07504 9.94386 3.07504 7.50002ZM7.50004 3.92502C5.52562 3.92502 3.92504 5.52561 3.92504 7.50002C3.92504 9.47442 5.52563 11.075 7.50004 11.075C9.47444 11.075 11.075 9.47442 11.075 7.50002C11.075 5.52561 9.47444 3.92502 7.50004 3.92502ZM7.50004 5.25002C6.2574 5.25002 5.25004 6.25739 5.25004 7.50002C5.25004 8.74266 6.2574 9.75002 7.50004 9.75002C8.74267 9.75002 9.75004 8.74266 9.75004 7.50002C9.75004 6.25738 8.74267 5.25002 7.50004 5.25002ZM6.05004 7.50002C6.05004 6.69921 6.69923 6.05002 7.50004 6.05002C8.30084 6.05002 8.95004 6.69921 8.95004 7.50002C8.95004 8.30083 8.30084 8.95002 7.50004 8.95002C6.69923 8.95002 6.05004 8.30083 6.05004 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
						<div className='flex items-center justify-center m-auto mt-4'>
							<a href='https://github.com/Axnjr'><svg className="w-4 h-4 m-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></a>
							<a href='mailto:yakshitchhipa@gmail.com'><svg className="w-4 h-4 m-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" fill="currentColor" /></svg></a>
							<a href='https://www.linkedin.com/in/yakshit/'><svg className="w-4 h-4 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor" /></svg></a>
						</div>
						<p className='text-xs sm:text-sm tracking-tight text-center m-2'>© 2023 FREEAI - Made with devotion by <a href='http://axn.vercel.app'> Yakshit Chhipa (axn)</a></p>
					</footer>
					<Toaster />
				</body>
			</AuthenticationProvider>
		</html>
	)
}