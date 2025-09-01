import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"login",
                element:<LoginPage/>
            },
        ]
    }
])
export default router;