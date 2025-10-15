import './App.css'
import Title from './components/title/title'
import Campaigns from './components/campaigns/campaigns'
import Budget from './components/budget/budget'

export default function App() {
  return (
    <>
      <div>
        <Title title='Campaigns' />
      </div>
      <div>
        <Campaigns />
      </div>
      <div>
        <Budget />
      </div>
    </>
  )
}
