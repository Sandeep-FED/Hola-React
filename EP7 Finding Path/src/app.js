import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Header } from "./components/Header"
import { Error } from "./components/Error"

export const App = () => {
  return (
    <div>
      <Header />
      <p>Body comes here</p>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
