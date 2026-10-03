import { Link, Outlet } from "react-router-dom";
import Button from "../components/ui/Button";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 md:flex">
        <aside className="flex w-full flex-col gap-6 bg-emerald-950 p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
            <h1 className="text-xl font-bold">
                Expense Tracker App
            </h1>
            <nav className="flex flex-col gap-2">
                <Link to= '/dashboard' className="rounded-md px-3 py-2 text-sm text-emerald-100 hover:bg-white/10 hover:text-white">Overview</Link>
                <Link to= '/dashboard/add-expense' className="rounded-md px-3 py-2 text-sm text-emerald-100 hover:bg-white/10 hover:text-white">Add Expense</Link>
            </nav>
            <Button text = 'Logout' />
        </aside>
        <main className="min-w-0 flex-1 p-6 md:p-10">
            <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout