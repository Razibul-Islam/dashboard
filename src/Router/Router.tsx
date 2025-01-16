import AllProduct from "@/components/pages/AllProduct";
import CreateBrand from "@/components/pages/CreateBrand";
import CreateCategory from "@/components/pages/CreateCategory";
import CreateProduct from "@/components/pages/CreateProduct";
import OfferProduct from "@/components/pages/offerProduct";
import Invoice from "@/document/Invoice";
import Customer from "@/pages/Customer";
import DBUI from "@/pages/DBUI";
import Main from "@/pages/Main";
import Order from "@/pages/Order";
import Stuff from "@/pages/Stuff";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "/dashboard",
        element: <DBUI />,
      },
      {
        path: "/dashboard/allProduct",
        element: <AllProduct />,
      },
      {
        path: "/dashboard/offer-product",
        element: <OfferProduct />,
      },
      {
        path: "/dashboard/createProduct",
        element: <CreateProduct />,
      },
      {
        path: "/dashboard/createCategory",
        element: <CreateCategory />,
      },
      {
        path: "/dashboard/createBrand",
        element: <CreateBrand />,
      },
      {
        path: "/dashboard/customer",
        element: <Customer />,
      },
      {
        path: "/dashboard/order",
        element: <Order />,
      },
      {
        path: "/dashboard/stuff",
        element: <Stuff />,
      },
      {
        path: "/dashboard/invoice",
        element: <Invoice />,
      },
    ],
  },
]);
