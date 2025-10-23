import Title from '../components/title/title'
import Campaigns from '../components/campaigns/campaigns'
import Budget from '../components/budget/budget'
import Contact from '../components/contact/contact';
import Budgets from '../components/budgets/budgets';
import Modal from '../components/modal/modal';

export default function BudgetMain() {
  return (
    <>
        <main className="my-5 py-5">
                <section className="mb-5">
                    <div>
                        <Title style="text-center text-3xl font-bold underline pb-5" title='Campaigns' />
                        <Modal />
                    </div>
                    <div>
                        <Campaigns />
                    </div>
                    <div>
                        <Budget />
                    </div>
                </section>
                <section className="mb-5">
                    <Contact />
                </section>
                <section>
                    <Budgets />
                </section>
        </main>
    </>
  )
}