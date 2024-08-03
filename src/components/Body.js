import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { Memorial } from './Memorial'
import { AddWorrier } from './AddWorrier'

export const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            children:[
                {
                    path:'/',
                    element:<Memorial/>
                },
                {
                    path:"/addworrier",
                    element:<AddWorrier/>
                }
            ]
        },
        // {
        //     path: "/login",
        //     element: <Login/>
        // }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}
