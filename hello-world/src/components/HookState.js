import React,{useState} from 'react'
//using state hook with functional component
//theory in lecture 44 why hooks importatnt

function HookState() {
//array destructuring
  const [count,setCount] = useState(0) //initial value 0
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count {count}</button>
    </div>
  )
}

export default HookState
