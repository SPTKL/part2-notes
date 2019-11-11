import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number :'12345'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ targetName, setTargetName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).indexOf(newName) > -1){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name : newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterName = (event) =>{
    setTargetName(event.target.value)
  }

  const rows = () =>
  persons.filter(person => person.name.toLowerCase().indexOf(targetName)>= 0)
  .map(person => <li>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form>
          <div>
            filter shown with: <input
            value={targetName}
            onChange={filterName}/>
          </div>
        </form>
      </div>
      <h2>add a new number</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            /><div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}/>
            </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  )
}

export default App