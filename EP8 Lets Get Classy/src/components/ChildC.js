import { Component } from "react"

export class ChildC extends Component {
  constructor(props) {
    super(props)
    console.log("Child C constructor ")
  }
  componentDidMount() {
    console.log("Child C component mounted")
  }

  render() {
    console.log("Child C component rendered")
    return <h3>Hello, {this.props.name}! </h3>
  }
}
