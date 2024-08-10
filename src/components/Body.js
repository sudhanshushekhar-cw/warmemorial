import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Home'
import { Memorial } from './Memorial'
import { AddWarrior } from './AddWarrior'

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
                    path: "/details/:war_id",
                    element: <Memorial/>
                },
                {
                    path:"/addwarrior/:war_id",
                    element:<AddWarrior/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}
