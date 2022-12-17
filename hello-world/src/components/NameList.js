import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Kishan', 'Ram', 'Raju']
    const persons = [
        {
            id: 1,
            Lname: 'Prajapati',
            age: '20'
        },
        {
            id: 2,
            Lname: 'Patel',
            age: '19'
        },
    ]
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    const personList = persons.map(person => (
        <Person key={person.id} person={person} />
    ))
  return (
    <div>
      {nameList}
      {personList}
    </div>
  )
}

export default NameList
