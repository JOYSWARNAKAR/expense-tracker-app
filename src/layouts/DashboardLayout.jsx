import { Link, Outlet } from "react-router-dom";
import Button from "../components/ui/Button";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f4f6f2] text-[#243330] md:flex">
        <aside className="flex w-full flex-col gap-7 bg-[#173f3b] px-5 py-6 text-white shadow-xl shadow-[#173f3b]/10 sm:px-7 md:min-h-screen md:w-64 md:shrink-0 md:gap-10 md:px-6 md:py-8 [&_button]:mt-1 [&_button]:w-full [&_button]:rounded-lg [&_button]:border [&_button]:border-white/15 [&_button]:bg-white/10 [&_button]:px-4 [&_button]:py-3 [&_button]:text-sm [&_button]:font-medium [&_button]:text-white [&_button]:transition-colors [&_button]:hover:bg-white/15 md:[&_button]:mt-auto">
            <h1 className="max-w-[11rem] text-2xl font-semibold leading-tight">
                Expense Tracker App
            </h1>
            <nav className="flex flex-wrap items-center gap-2 md:flex-col md:items-stretch">
                <Link to= '/dashboard' className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#d8e7df] transition-colors hover:bg-white/10 hover:text-white">Overview</Link>
                <Link to= '/dashboard/add-expense' className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#d8e7df] transition-colors hover:bg-white/10 hover:text-white">Add Expense</Link>
            </nav>
            <Button text = 'Logout' />
        </aside>
        <main className="min-w-0 flex-1 px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-11">
            <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout