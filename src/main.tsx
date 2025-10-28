import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BudgetProvider } from "./components/budget/budgetContext";
import { ContactProvider } from './components/contact/contactContext';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BudgetProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </BudgetProvider>
  </StrictMode>
)
