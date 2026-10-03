import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AddExpense from "../pages/expense/AddExpense";
import ManageExpense from "../pages/expense/ManageExpense";
import Overview from "../pages/expense/Overview";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

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
            },
            {
                path: 'manage-expense',
                element: <ManageExpense />
            },
            {
                path: 'profile',
                element: <Profile />
            },

        ]
    }
    
]

// export default appRoutes