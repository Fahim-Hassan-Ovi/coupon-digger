import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../pages/Error";
import HomeLayout from "../layout/HomeLayout";
import BrandsLayout from "../layout/BrandsLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandDetails from "../pages/BrandDetails";

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
      path: "/details/:_id",
      element: <BrandDetails />,
      loader: async ({params}) =>{
        const res = await fetch("/brands.json")
        const data = await res.json()
        const singleBrand = data.filter(data=>data._id == params._id)
        return singleBrand;
      }
    },
    {
      path: "/brands",
      element: <BrandsLayout />,
      loader: () => fetch("/brands.json")
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
          {
              path: "/auth/login",
              element: <Login />
          },
          {
              path: "/auth/register",
              element: <Register />
          }
      ]
  },
    {
      path: '*',
      element: <Error />
    },
  ]);

  export default router;