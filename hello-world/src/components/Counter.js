import React, { Component } from 'react'

class Counter extends Component {  //rce shortcut

    constructor(props) {   //rconst shortcut
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){  //two parameters 1) setstate 2nd arrow function of consol log callback . if you just add consol log after set state then it will not synchronous
        // this.setState({
        //     count: this.state.count + 1
        // },
        // ()=>{
        //     console.log('Callback value',this.state.count)
        //     }
        // )

        //when have to change state based on prev state value then pass in a fucntion as argument (prevState)
        this.setState((prevState) => ({  // code to increment 5 times
            count:prevState.count +1
        }))
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={ () => this.incrementFive() }>Increment</button>
      </div>
    )
  }
}

export default Counter
