import { Component } from "react"
import { ChildA } from "./ChildA"
import { ChildB } from "./ChildB"
import { ChildC } from "./ChildC"

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log("Parent constructor called")
  }
  componentDidMount() {
    console.log("Parent component mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Parent component updated", prevState)
  }

  render() {
    console.log("Parent component rendered")

    const handleCounter = () => {
      this.setState(
        {
          count: this.state.count + 1,
        },
        () => console.log(this.state.count)
      )
    }

    return (
      <>
        <h2>Parent Component</h2>
        <button onClick={handleCounter}>{this.state.count}</button>
        <ChildA name={"first child"} />
        <ChildB name={"second child"} />
        <ChildC name={"third child"} />
      </>
    )
  }
}
