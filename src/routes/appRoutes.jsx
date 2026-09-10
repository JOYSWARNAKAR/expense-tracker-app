
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";

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
    
]

// export default appRoutes