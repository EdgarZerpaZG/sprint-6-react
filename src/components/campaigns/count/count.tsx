import { useState } from 'react'

export default function page() {
    const [page, setPage] = useState(0);
    const [language, setLanguage] = useState(0);

    return (
        <>
            <div className="flex justify-end mb-3 items-center">
                <p className="pe-2">Page number: </p>
                <button className="px-2 rounded-4xl block border-b cursor-pointer" onClick={() => setPage(page - 1)}>-</button>
                <span className="inset-shadow-sm px-5 mx-2 rounded">{page}</span>
                <button className="px-2 rounded-4xl block border-b cursor-pointer" onClick={() => setPage(page + 1)}>+</button>
            </div>
            <div className="flex justify-end items-center">
                <p className="pe-2">Language number: </p>
                <button className="px-2 rounded-4xl block border-b cursor-pointer" onClick={() => setLanguage(language - 1)}>-</button>
                <span className="inset-shadow-sm px-5 mx-2 rounded">{language}</span>
                <button className="px-2 rounded-4xl block border-b cursor-pointer" onClick={() => setLanguage(language + 1)}>+</button>
            </div>
        </>
    )
}