import { Component } from "react"

export class ChildB extends Component {
  constructor(props) {
    super(props)
    console.log("Child B constructor called")
  }
  componentDidMount() {
    console.log("Child B componentmounted")
  }

  render() {
    console.log("Child B rendered")
    return <h3>Hii, {this.props.name} </h3>
  }
}
