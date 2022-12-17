import React, { Component } from 'react'
//we want field to be focussed when page loads
class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef) //to see what inputRef is doing 
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type = 'text' ref={this.inputRef} />
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
