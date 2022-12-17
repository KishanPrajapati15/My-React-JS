import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome Vishwas</div>//checks if condition true then prints else nothing

    //or

    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Vishwas</div>:
    //     <div>Welcome Guest</div>
    // )

    //or

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div>
    // } else {
    //     message = <div>Welcome Guest </div>
    // }

    // return <div>{message}</div>

    //or

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Vishwas</div>
    //     )
    // }
    // else {
    //     return (
    //         <div>Welcome guest</div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>Welcome kishan</div>
    //     <div>Welcome guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
