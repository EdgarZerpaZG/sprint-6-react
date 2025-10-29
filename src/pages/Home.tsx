import Title from '../components/title/title'
import Vite from '/vite.svg'

export default function Home() {
  return (
    <>
        <main className="flex justify-center items-center h-screen">
            <section>
                <img src={Vite} alt="Vite logo" className="mx-auto mb-3" />
                <Title style="text-center text-3xl font-bold underline pb-5" title='Welcome User! 🚀' />
                <p className="text-center text-sm">This is the homepage of Campaign Calculator.</p>
                <p className="text-center">Go to the “Budget” tab to access the budget options.</p>
            </section>
        </main>
    </>
  )
}