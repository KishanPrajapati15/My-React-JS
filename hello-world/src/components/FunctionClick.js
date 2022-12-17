import React from 'react'

function FunctionClick() {  //rfce  //event handling 

    function clickHandler() {
        console.log('Button clicked')
    }
        
    

  return ( //event handler is a function and not function call so no parenthesis after function name in onClick
    <div>
      <button onClick={clickHandler}>Click</button> 
    </div>
  )
}

export default FunctionClick
