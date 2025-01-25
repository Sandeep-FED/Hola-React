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
  async componentDidMount() {
    // this is how you make api calls inside componentDidMount
    const data = await fetch("https://api.sampleapis.com/beers/ale")
    console.log(await data.json())
    console.log("Parent component mounted")

    setInterval(() => {
      console.log('welcome')
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    // this is how we perform any operations based on state or props change
    if (this.state.count === 2) {
      console.log("hiiiiiiiiiiiii")
    }
  }

  componentWillUnmount() {
    // this is how we clear any memory leaks
    clearInterval()
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
