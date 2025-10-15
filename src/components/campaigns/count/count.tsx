import { useState } from 'react'

export default function page() {
    const [page, setPage] = useState(0);
    const [language, setLanguage] = useState(0);

    return (
        <>
            <div className="flex">
                <p>Page number: </p>
                <button className="px-2 py-1 rounded-md block bg-emerald-500 cursor-pointer" onClick={() => setPage(page - 1)}>-</button>
                {page}
                <button className="px-2 py-1 rounded-md block bg-emerald-500 cursor-pointer" onClick={() => setPage(page + 1)}>+</button>
            </div>
            <div className="flex">
                <p>Language number: </p>
                <button className="px-2 py-1 rounded-md block bg-emerald-500 cursor-pointer" onClick={() => setLanguage(language - 1)}>-</button>
                {language}
                <button className="px-2 py-1 rounded-md block bg-emerald-500 cursor-pointer" onClick={() => setLanguage(language + 1)}>+</button>
            </div>
        </>
    )
}