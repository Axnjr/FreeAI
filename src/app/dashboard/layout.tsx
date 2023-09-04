import '../assets/globals.css'

export const metadata = {
    title: "FREEAI | Dashboard",
    description: `
		Easily enable your apps with powerfull Artificial intelligent models for free 100%. 
		Leverage opensource large language models from the big tech companies in one fetch.
		Sign in for optimized response and api details or get started directly. Opensource 
		models from the AI community of huggingface without any complexity of access tokens
		pipelines and transformers just fetch and use all for free. Your Dashbaord.
	`,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}