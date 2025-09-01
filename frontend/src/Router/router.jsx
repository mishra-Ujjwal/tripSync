import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import Home from "../pages/Home";
import Planner from "../components/Planner";
import Destinations from "../components/Destinations";

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
            {
                path:"planner",
                element:<Planner/>
            },
            {
                path:"destinations",
                element:<Destinations/>
            },
        ]
    }
])
export default router;