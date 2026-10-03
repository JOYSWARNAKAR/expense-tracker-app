import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AddExpense from "../pages/expense/AddExpense";
import Overview from "../pages/expense/Overview";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const appRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children : [
            {
                path: '/', element : <Home />
            },
            {
                path: '/about', element : <About />
            },
        ]
    },
    {
        path: '/login', element: <Login />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: 'add-expense',
                element: <AddExpense />
            }
        ]
    }
    
]

// export default appRoutes