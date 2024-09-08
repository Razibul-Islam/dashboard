import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import WebsiteManage from "../pages/WebsiteManage";
import AllUser from "../pages/AllUser";
import ShortLink from "../pages/ShortLink";
import Overview from "../pages/Overview";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "manageWebsite",
        element: <WebsiteManage />,
      },
      {
        path: "alluser",
        element: <AllUser />,
      },
      {
        path: "shortLink",
        element: <ShortLink />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
  {
    path: "/login",
    element: <Register />,
  },
]);
