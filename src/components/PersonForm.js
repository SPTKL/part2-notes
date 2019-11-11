import React from 'react'

const PersonForm = (props) =>{
    const {newName, newNumber, setNewName, setNewNumber, persons, setPersons} = props
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

    return (
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
    )

}

export default PersonForm