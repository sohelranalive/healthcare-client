import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Service from "../pages/Service/Service/Service";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";


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
                path: '/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router;