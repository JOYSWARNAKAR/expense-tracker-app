import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStore } from "../contexts/AuthContext";


function Header() {

  const {user} = useContext(AuthStore)
  
  

  return (
   <header className="flex justify-between items-center p-4">
    <h1 className="text-base font-bold">Expense Tracker App</h1>

    {
      user ? (
        <Link to='/dashboard' className="text-white bg-orange-500 px-4 py-2 rounded">DashBoard</Link>
      ) : (
        <Link to='/login' className="text-white bg-orange-500 px-4 py-2 rounded">Login</Link>
      )
    }

   </header>
  )
}

export default Header