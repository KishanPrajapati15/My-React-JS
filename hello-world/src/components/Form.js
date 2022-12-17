import React, { Component } from 'react'
//creating form class component
class Form extends Component {
    //passing props to constructor
    constructor(props) {
      super(props)
    // initialising initial state values
      this.state = {
         username:'',
         comments: '',
        //  topic:'react'
      }
    }
    //function to set username state 
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    //function to set password state
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    // handleTopicsChange = (event) => {
    //     this.setState({
    //         topic:event.target.value
    //     })
    // }

    // handleSubmit = event =>{
    //     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    //     event.preventDefault()
    // }
    //handle submit
    handleSubmit = event =>{
        alert(`User ${this.state.username} Password ${this.state.comments}`)
        event.preventDefault()
    }
    
  render() {
    return (
        //creating form using form tag
      <form onSubmit ={this.handleSubmit}>
        <h1>Login Form</h1>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
            <label>Password</label>
            <input type='text' value={this.state.comments} onChange={this.handleCommentsChange}/>
        </div>
        <div>
        {/* <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicsChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select> */}
        </div>
        {/* submit button */}
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
