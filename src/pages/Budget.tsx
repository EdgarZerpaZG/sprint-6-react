import Title from '../components/title/title'
import { BudgetProvider } from "../components/budget/budgetContext";
import Campaigns from '../components/campaigns/campaigns'
import Budget from '../components/budget/budget'
import Contact from '../components/contact/contact';
import Budgets from '../components/budgets/budgets';

export default function BudgetMain() {
  return (
    <>
        <main className="my-5 py-5">
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
                <section className="mb-5">
                    <Contact />
                </section>
                <section>
                    <Budgets />
                </section>
            </BudgetProvider>
        </main>
    </>
  )
}