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
import PrivateRoute from "./PrivateRoute";
import BookService from "../pages/BookService/BookService";
import BookedServices from "../pages/bookedServices/BookedServices";
import AddService from "../pages/AddService/AddService";

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
          path : '/services/:id',
          element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : '/bookService/:id',
          element : <PrivateRoute><BookService></BookService></PrivateRoute>
        },
        {
          path : '/bookedServices',
          element : <PrivateRoute><BookedServices></BookedServices></PrivateRoute>
        },
        {
          path : '/addService',
          element : <PrivateRoute><AddService></AddService></PrivateRoute>
        }
      ]
    },
]);

export default router