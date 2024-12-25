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
import ErrorElement from "../pages/errorElement/ErrorElement";
import ManageServices from "../pages/ManageServices/ManageServices";
import ServiceToDo from "../pages/ServiceToDo/ServiceToDo";

  const router = createBrowserRouter([
    {
      path: "/",
      element : <MainLayout></MainLayout>,
      errorElement : <ErrorElement></ErrorElement>,
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
        },
        {
          path : '/manageServices',
          element : <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
        },
        {
          path : '/serviceToDo',
          element : <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
        },
      ]
    },
]);

export default router