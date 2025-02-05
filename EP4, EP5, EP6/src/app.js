import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Help } from "./components/Help"
import { Body } from "./components/Body"
import { AboutClass } from "./components/AboutClass"
import "../style.css"
import { useUserOnlineStatus } from "./hooks/useUserOnlineStatus"
import { UserContext } from "./utils/UserContext"
import { Provider } from "react-redux"
import { appStore } from "./utils/appStore"

const AppLayout = () => {
  const isOnline = useUserOnlineStatus()
  const [userName, setUserName] = useState("Peter")

  if (!isOnline)
    return (
      <div className='network-down-wrapper'>
        <h1>Network Issue</h1>
        <img
          src={require("../src/images/undraw_server_down_s4lk.png")}
          alt='Network issue image illustration'
          width={450}
        />
      </div>
    )

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className='app'>
          <HeaderComponent />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"))

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
