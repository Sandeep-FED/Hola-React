import React from "react"
import ReactDOM from "react-dom/client"
import { Parent } from "./components/Parent"
export const App = () => {
  return (
    <>
      <h1>App component</h1>
      <Parent />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
