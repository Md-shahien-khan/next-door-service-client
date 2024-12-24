// Router
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import ViewAllService from "../pages/viewAllService/ViewAllService";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element : <MainLayout></MainLayout>,
      errorElement : <h2>Route Not found</h2>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
          path : '/signin',
          element : <SignIn></SignIn>
        },
        {
          path : '/viewAllService',
          element : <ViewAllService></ViewAllService>
        },
        {
          path : '/serviceDetails',
          element : <ServiceDetails></ServiceDetails>
        }
      ]
    },
]);

export default router