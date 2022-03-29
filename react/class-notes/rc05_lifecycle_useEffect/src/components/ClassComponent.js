import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { count: 0 }
  state = { count: 0 }

  increase = () => { this.setState({ count: this.state.count + 1 }) }
  dicrease = () => { this.setState({ count: this.state.count - 1 }) }

  // increase = () => this.setState({name:"Felix"})

  componentDidMount() {
    console.log("Class Component mounted")
    this.increase()
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Class Component updated")
    console.log(prevState.count)
    prevState.count !== this.state.count && console.log("Class Component updated")

  }

  componentWillUnmount() {
    alert("Class Component unmounted")
  }
    // this.increase()
  // }
  
  render() {
    console.log("Class Component rendered")
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.dicrease}>Dicrease</button>
      </div>
    )
  }
}


export default ClassComponent

