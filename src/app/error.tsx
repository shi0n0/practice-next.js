"use client"

interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

export default function Error({error, reset}: ErrorPageProps) {
    return(
        <div>
            <h1>error😓</h1>
            <p>何かが間違っています</p>
            <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" onClick={reset}>リロード</button>
        </div>
    )
}