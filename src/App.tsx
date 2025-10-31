import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import BudgetMain from "./pages/Budget";
import DetailsMain from "./pages/Details";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<BudgetMain />} />
          <Route path="/details/:id" element={<DetailsMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}