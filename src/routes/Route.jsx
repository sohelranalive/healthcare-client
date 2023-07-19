import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Service from "../pages/Service/Service/Service";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import About from "../pages/About/About/About";
import Contact from "../pages/ContactUs/Contact/Contact";
import Blog from "../pages/Blog/Blog/Blog";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;