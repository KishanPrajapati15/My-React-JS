import React from 'react'

function Person({person}) {
  return (
    <div>
      <h3>
            I am {person.Lname}, My age{person.age}
      </h3> 
    </div>
  )
}

export default Person
