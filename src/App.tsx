import './App.css'
import CheckBox from './components/checkBox/checkBox'

export default function App() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold underline">Budget Campaigns</h1>
      </div>
      <div className="flex justify-center">
        <CheckBox />
      </div>
    </>
  )
}
