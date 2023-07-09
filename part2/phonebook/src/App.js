import { useState } from 'react'
import Person from './components/Person'
import Input from './components/Input'




const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])


  const [newPerson, setNewPerson] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")
  


  // Event handling 
  const addPerson = (e) =>{
    e.preventDefault()
    var unique = persons.find(person => person.name === newPerson)
    if (typeof unique === "undefined"){
      const newAddPerson = {
        name:newPerson,
        number:newNumber,
        id: persons.length + 1

      }
      setPersons(persons.concat(newAddPerson))
    }
    else{
      window.alert(`${newPerson} already exist`)
    }

  }
  const handleNewPerson = (e) =>{
    console.log(e.target.value)
    setNewPerson(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) =>{
    setSearch(e.target.value)
  }


  //Filtering 
  const peopleShow = search === "" ? persons : persons.filter(people => people.name.includes(search)) 


  return(
    <div>
      <h1>Phonebook</h1>
      <p>filter shown with:</p>
      <Input onChange = {handleFilter}/>
      <h1>add new number</h1>
      <form onSubmit = {addPerson}>
        <Input placeholder= {"add person name"} onChange = {handleNewPerson}/>
        <Input placeholder= {"add person number"} onChange = {handleNewNumber}/>
        <button type = "submit">add</button>
      </form>



      <h1>Numbers</h1>
      {peopleShow.map(person => <Person key = {person.name} name = {person.name} num = {person.number}/>)}

    </div>
  )
}



export default App 
