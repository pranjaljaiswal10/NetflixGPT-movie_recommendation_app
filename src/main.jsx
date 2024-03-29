import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from "./components/Login.jsx"
import Browse from './components/Browse.jsx'
import Error from './components/Error.jsx';
import MoviePage from './components/MoviePage.jsx';
import Search from './components/GPTSearch.jsx';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },{
        path:"/browse",
        element:<Browse/>
      },{
        path:"/in/title/:movieId",
        element:<MoviePage/>
      },{
        path:"/search",
        element:<Search/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
)
