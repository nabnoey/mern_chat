import { createBrowserRouter  } from "react-router";
// import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Theme from "../pages/Theme"
import Profile from "../pages/Profile";
import Chat from "../pages/Chat"

const router = createBrowserRouter


  (
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
            path:"/register",
            element:< Register />
        },

        {
            path:"/login",
            element:<Login />
        },

        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/theme",
            element:<Theme />
        },
        {
            path:"/profile",
            element:<Profile />
        },

        {
            path:"",
            element:<Chat />
        }
    ]
    }
        
       
    ]
)

export default router;