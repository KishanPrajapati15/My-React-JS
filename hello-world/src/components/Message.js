import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message:'Welcome Vis'
        }
    }

    changeMessage(){
        this.setState({
            message:'This is the changed text'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage() }>Change text</button>

            </div>
            
        )
    }
}

export default Message