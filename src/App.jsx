 
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutOne from './Layouts/LayoutOne';
import LayoutTwo from './Layouts/LayoutTwo';
import About from './Pages/About';
import Resume from './Pages/Resume';


function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<LayoutOne></LayoutOne>,
    children:[
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/resume',
        element:<Resume></Resume>
      }
    ]
   
  },
  {
 path:"/layoutTwo",
 element:<LayoutTwo></LayoutTwo> ,
  },
])


  return (
  <>
<RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
