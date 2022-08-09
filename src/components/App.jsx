import React from "react";
import shortid from "shortid";
import { StyledApp } from "./Container/Container.styled";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { FormByFormik } from "./Form/Form";
import { Notify } from "notiflix";
import { useState ,useEffect} from "react";

export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))??[]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedValue = JSON.parse(localStorage.getItem('contacts'))
    if (parsedValue) { return setContacts(parsedValue)}
 
  }, [])

  useEffect(() => {localStorage.setItem('contacts',JSON.stringify(contacts))})
      
 const addContact = ({ name, number }) => {
    const card = { id: shortid.generate(), name, number }
    const findSameNumber=contacts.find(contact=>contact.name.toLowerCase()===name.toLowerCase())
    if (findSameNumber) {
      Notify.failure("this name already in list")
      return
   }
const sorted = [card, ...contacts].sort((a, b) => a.name.localeCompare(b.name) )
setContacts(sorted)

  }
  
  const filterContacts = (e) =>setFilter(e.target.value)

  const filterHandleChange = () => {
    const filteredArray = contacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) || contact.number.includes(filter.trim()))
    return filteredArray
  }
  const filteredArray=filterHandleChange()
  
  const deleteContacts = id => setContacts(contacts.filter(contact=>contact.id!==id))

     return (
      <StyledApp>
        <h1>Phonebook</h1>
        <FormByFormik addContact={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={filterContacts} value={filter}/>
        <ContactsList data={filteredArray} onClick={deleteContacts} />  
     
     </StyledApp>
    )
}



// export class oldApp extends Component  {
// state = {
//   contacts: [
//   ],
//   filter: '',
//   }
//     componentDidMount() {
   
//       const parsedValue = JSON.parse(localStorage.getItem('contacts'))
//       if (parsedValue) this.setState({ contacts:parsedValue})
//   }
//   componentDidUpdate(prevState,NewState) {

//     if (this.state.contacts !== NewState.contacts) {
//   localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
// }
    
//   }
//   addContact = ({ name, number }) => {
//     const card = { id: shortid.generate(), name, number }
//     const findSameNumber=this.state.contacts.find(contact=>contact.name.toLowerCase()===name.toLowerCase())
//     if (findSameNumber) {
//       Notify.failure("this name already in list")
//       return
//    }

//     this.setState(({ contacts }) => {

//       const sorted = [card, ...contacts].sort((a, b) => a.name.localeCompare(b.name) 
//       )

//       return ({ contacts: sorted })
      
//     })

//   }

//   filterContacts = (e) =>this.setState({filter:e.target.value})
  

//   filterHandleChange = (e) => {
   
//     const { contacts, filter } = this.state
//     const filteredArray = contacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) || contact.number.includes(filter.trim()))
//     return filteredArray

//   }
  
//   deleteContacts = id => this.setState({contacts:this.state.contacts.filter(contact=>contact.id!==id)})
  

//   render() {
//     const filteredArray=this.filterHandleChange()
//     const { filter } = this.state

//     return (
//       <StyledApp>
//         <h1>Phonebook</h1>
//         <FormByFormik addContact={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter onChange={this.filterContacts} value={filter}/>
//         <ContactsList data={filteredArray} onClick={this.deleteContacts} />  
     
//      </StyledApp>
//     )
//   }
// }

