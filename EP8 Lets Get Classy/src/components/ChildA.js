import { Component } from "react"

export class ChildA extends Component {
  constructor(props) {
    super(props)
    console.log("Child A constructor called")
  }
  componentDidMount() {
    console.log("Child A component mounted")
  }

  render() {
    console.log("Child A component rendered")
    return <h3>Hello, {this.props.name}!</h3>
  }
}
