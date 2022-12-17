import React, { Component } from 'react'

class ClassClick extends Component { //event handing in class

    clickHandler() {
        console.log('Cicked the button')
    }

  render() {
    return (
      <div>
        <button onClick = {this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
