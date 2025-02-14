import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../pages/Error";
import HomeLayout from "../layout/HomeLayout";

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
      path: '*',
      element: <Error />
  },
  ]);

  export default router;