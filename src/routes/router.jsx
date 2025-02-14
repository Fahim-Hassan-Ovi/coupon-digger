import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../pages/Error";
import HomeLayout from "../layout/HomeLayout";
import BrandsLayout from "../layout/BrandsLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children:[
        {
          
        }
      ]
    },
    {
      path: "/brands",
      element: <BrandsLayout />,
      loader: () => fetch("/brands.json")
    },
    {
      path: '*',
      element: <Error />
    },
  ]);

  export default router;