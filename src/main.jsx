import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Test from './components/Test/test';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import CourseDetails from './components/CourseDetails/CourseDetails';
// ====================================================================== //

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('courses.json')
      },
      {
        path: 'header',
        element: <Header></Header>
      },
      {
        path: 'test',
        element: <Test></Test>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'home/:courseId',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`courses.json/${params.courseId}`)
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
