import { createBrowserRouter,} from "react-router-dom";
import Main from "../../pages/layout/Main";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
        
            element:<Login></Login>
        },
        {
            path:'register',
            element:<SignUp></SignUp>
        }
      ]
      
    },
  ]);