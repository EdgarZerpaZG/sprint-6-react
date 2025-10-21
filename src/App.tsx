import './App.css'
import Title from './components/title/title'
import { BudgetProvider } from "./components/budget/budgetContext";
import Campaigns from './components/campaigns/campaigns'
import Budget from './components/budget/budget'

export default function App() {
  return (
    <>
      <BudgetProvider>
        <div>
          <Title title='Campaigns' />
        </div>
        <div>
          <Campaigns />
        </div>
        <div>
          <Budget />
        </div>
      </BudgetProvider>
    </>
  )
}
