
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
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
    }
    
]

// export default appRoutes