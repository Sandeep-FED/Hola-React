import React from "react"
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Help } from "./components/Help"
import { Body } from "./components/Body"
import { RestaurantMenu } from "./components/RestaurantMenu"
import { About } from "./components/About"
import { AboutClass } from "./components/AboutClass"
import "../style.css"
import { useUserOnlineStatus } from "./hooks/useUserOnlineStatus"

const AppLayout = () => {
  const isOnline = useUserOnlineStatus()

  if (!isOnline)
    return (
      <div className='network-down-wrapper'>
        <h1>Network Issue</h1>
        <img
          src={require("../src/images/undraw_server_down_s4lk.png")}
          alt='Network issue image illustration'
        />
      </div>
    )

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
        path: "/about",
        element: <AboutClass name={"hello"} />,
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
