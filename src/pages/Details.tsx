import Title from '../components/title/title'

export default function Details() {
    return (
        <>
            <main className="flex justify-center items-center h-screen">
                <section>
                    <Title style="text-center text-3xl font-bold underline pb-5" title='Budget details' />
                    <p className="text-center text-gray-500 mt-5">There is not budget created</p>
                </section>
            </main>
        </>
    )
}