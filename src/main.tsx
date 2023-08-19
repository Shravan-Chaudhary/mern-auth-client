import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import HomeScreen from "@/screens/HomeScreen.tsx";
import SignInScreen from "@/screens/SignInScreen.tsx";
import SignUpScreen from "@/screens/SignUpScreen.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index={true} path='/' element={<HomeScreen />} />
            <Route  path='/signin' element={<SignInScreen />} />
            <Route  path='/signup' element={<SignUpScreen />} />

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
