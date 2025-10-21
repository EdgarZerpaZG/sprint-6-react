import { Link } from "react-router-dom";
import '../../App.css';

export default function Navbar() {
  return (
    <>
      <nav className="text-end my-5">
        <Link className="px-4 py-2 mx-2 text-black hover:text-gray-500" to="/">Home</Link>
        <Link className="px-4 py-2 mx-2 text-black hover:text-gray-500" to="/budget">Budget</Link>
      </nav>
    </>
  );
}