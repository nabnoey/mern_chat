import { createBrowserRouter  } from "react-router";
// import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

const router = createBrowserRouter  (
    [
        {
        path:"/",
        element:<MainLayout/>,
        children:[
        //     {
        //         path:"/",
        //         element:<HomePage/>
            
        // },

        {
            path:"/",
            element:<Register />
        },

        {
            path:"/login",
            element:<Login />
        },

        {
            path:"/contact",
            element:<Contact />
        }
    ]}
    ]
)

export default router;