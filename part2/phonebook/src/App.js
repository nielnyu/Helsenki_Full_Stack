import { useState } from 'react'
import Person from './components/Person'



const App = () => {

  const [persons, setPersons] = useState([{name: "Arto Hellas", number:'040-123456', id:1}])
  const [newPerson, setNewPerson] = useState("")
  const [newNumber, setNewNumber] = useState("")
  

  const addPerson = (e) =>{
    e.preventDefault()

    if (newPerson in persons){
      alert({newPerson} + "already in phonebook")
    } 
    else{
      const newAddPerson = {
        name:newPerson,
        number:newNumber,
        id: persons.length + 1

      }
      setPersons(persons.concat(newAddPerson))
    }

  }

  const handleNewPerson = (e) =>{
    console.log(e.target.value)
    setNewPerson(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }




  return(
    <div>
      <h1>Phonebook</h1>
      <h1>add new number</h1>
      <form onSubmit = {addPerson}>
        <input placeholder= {"add person name"} onChange = {handleNewPerson}/>
        <input placeholder= {"add person number"} onChange = {handleNewNumber}/>
        <button type = "submit">add</button>
      </form>



      <h1>Numbers</h1>
      {persons.map(person => <Person key = {person.name} name = {person.name} num = {person.number}/>)}

    </div>
  )
}



export default App 
