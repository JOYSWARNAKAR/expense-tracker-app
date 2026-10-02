import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStore } from "../contexts/AuthContext";


function Header() {

  const data = useContext(AuthStore)
  console.log(data);
  

  return (
   <header className="flex justify-between items-center p-4">
    <h1 className="text-base font-bold">Expense Tracker App</h1>
    <Link to='/login' className="text-white bg-orange-500 px-4 py-2 rounded">Login</Link>
   </header>
  )
}

export default Header