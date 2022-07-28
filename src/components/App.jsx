import React,{ Component } from "react";
import shortid from "shortid";
import { StyledApp } from "./Container/Container.styled";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Form } from "./Form/Form";



export class App extends Component  {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  addContacts = ({ name, number }) => {
    const card = { id: shortid.generate(), name, number }
    const findSameNumber=this.state.contacts.find(contact=>contact.name.toLowerCase()===name.toLowerCase())
    if (findSameNumber) {
      alert("this name already in list")
      return
   }
  
    this.setState(({ contacts }) => ({ contacts: [card, ...contacts] }))

  }

  filterContacts = (e) =>this.setState({filter:e.target.value})
  

  filterHandleChange = (e) => {
   
    const { contacts, filter } = this.state
    const filteredArray = contacts.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) || contact.number.includes(filter.trim()))
    return filteredArray

  }
  
  deleteContacts = id => this.setState({contacts:this.state.contacts.filter(contact=>contact.id!==id)})
  

  render() {
    const filteredArray=this.filterHandleChange()
    const { filter } = this.state

    return (
      <StyledApp>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} value={filter}/>
        <ContactsList data={filteredArray} onClick={this.deleteContacts} ></ContactsList>    
     
     </StyledApp>
    )
  }
}

