import Title from '../components/title/title'

export default function Home() {
  return (
    <>
        <main className="flex justify-center items-center h-screen">
            <section>
                <Title style="text-center text-3xl font-bold underline pb-5" title='Welcome User! 🚀' />
                <p className="text-center text-sm">This is the homepage of Campaign Calculator.</p>
                <p className="text-center">Go to the “Budget” tab to access the budget options.</p>
            </section>
        </main>
    </>
  )
}