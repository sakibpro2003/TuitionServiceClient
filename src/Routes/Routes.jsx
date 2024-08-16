import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './../Layout/Main';
import Home from '../Pages/Home';
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ServiceDetails from "../Pages/ServiceDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      
    ]
  },
  {
    path:"/login",
    element: <Login></Login>,
  },
  {
    path:"/register",
    element: <Register></Register>,
  }
]);

export default router;