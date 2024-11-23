import React from "react"
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./components/Header"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Help } from "./components/Help"
import { Body } from "./components/Body"
import { RestaurantMenu } from "./components/RestaurantMenu"

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
