import Title from '../components/title/title'
import { BudgetProvider } from "../components/budget/budgetContext";
import Campaigns from '../components/campaigns/campaigns'
import Budget from '../components/budget/budget'
import Contact from '../components/contact/contact';

export default function BudgetMain() {
  return (
    <>
        <main>
            <BudgetProvider>
                <section className="mb-5">
                    <div>
                        <Title style="text-center text-3xl font-bold underline pb-5" title='Campaigns' />
                    </div>
                    <div>
                        <Campaigns />
                    </div>
                    <div>
                        <Budget />
                    </div>
                </section>
                <section>
                    <Contact />
                </section>
            </BudgetProvider>
        </main>
    </>
  )
}