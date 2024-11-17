import React from "react"
import ReactDOM from "react-dom/client"
import { HeaderComponent } from "./components/Header"
import { BodyWrapper } from "./components/BodyWrapper"

const AppLayout = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <BodyWrapper />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
