import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";
 import { Home } from "./pages/Home";
 import { About } from "./pages/Aboutus";
 import { Country } from "./pages/Country";
 import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";


 //react-router-dom
 const router = createBrowserRouter([
    {
     path:"/",
     element:<AppLayout />,
     errorElement:<ErrorPage />, //property if url does not match thn it will be rendered

     children:[
      {
    index:true,
    element:<Home />,
    },
    {
    path:"about",
    element:<About />,
    },
    
    {
    path:"country",
    element:<Country />,
    },
    {
    path:"country/:id",
    element:<CountryDetails />,
    },
    {
    path:"contact",
    element:<Contact />,
    }]
     }
    
    
])
 
 const App = () =>
{
    return <RouterProvider router={router} ></RouterProvider>;//redirects to the particular page without loading
};

export default App;