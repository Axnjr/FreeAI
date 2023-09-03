export default function Loading({ message } : { message : string }) {
    return (
        <div className="loading-dash absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
            <h1 className="text-2xl font-bold">{message}</h1>
            <svg className="animate-spin ml-4 mr-4 mt-2 h-8 w-8 text-black dark:text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    )
}
