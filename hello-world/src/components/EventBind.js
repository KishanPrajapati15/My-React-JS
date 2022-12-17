import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message:'clicked'
        })
    } 

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* approach 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
        {/* it will rerender again and again by above menthod */}
        {/* approach 2 */}
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
        {/* approach 3: line after setState */}
        <button onClick={this.clickHandler}>Click</button> 



      </div>
    )
  }
}

export default EventBind
