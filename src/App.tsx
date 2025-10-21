import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import BudgetMain from "./pages/Budget";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<BudgetMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}