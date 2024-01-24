import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import WebsiteManage from "../pages/WebsiteManage";
import AllUser from "../pages/AllUser";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'manageWebsite',
                element: <WebsiteManage/>
            },
            {
                path:'alluser',
                element: <AllUser/>
            },
        ]
    }
])