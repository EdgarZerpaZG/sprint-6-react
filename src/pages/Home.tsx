import Title from '../components/title/title'

export default function Home() {
  return (
    <>
        <main>
            <section>
                <Title style="text-center text-3xl font-bold underline pb-5" title='Welcome User! 🚀' />
                <p className="text-center">This is the homepage of Campaign Calculator.</p>
            </section>
        </main>
    </>
  )
}