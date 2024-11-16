import React from "react"
import ReactDOM from "react-dom/client"

// React Element
// const heading = React.createElement("h1", {}, "Welcome to JSX")
// console.log(heading)

// React JSX - single element
// const headingUsingJSX = <p>He bro!!</p>
// console.log(headingUsingJSX)
// both heading & headingUsingJSX are React Elements

// React JSX - multi elements
const headingUsingJSX = (
  <>
    <p>He bro!!</p>
    <p>Whats up!!!</p>
  </>
)

const Header = () => (
  <div>
    <h1>Welcome to JSX</h1>
    {headingUsingJSX}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header />)
