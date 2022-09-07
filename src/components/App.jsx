import React from "react";
import { StyledApp } from "./Container/Container.styled";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { FormByFormik } from "./Form/Form";
// import { Notify } from "notiflix";
import { useDispatch ,useSelector} from "react-redux";
import { setFilter } from "redux/filterSlice";
import { filterHandleChange ,getContacts,filterContacts,sortedContactsFunction} from "redux/selectors";
import {REMOVE_CONTACTS } from '../redux/contactsSlice'

export function App() {

  const contactsApp = useSelector(getContacts)

  const filter = useSelector(filterContacts)

  const sortedContacts = sortedContactsFunction(contactsApp)
  const filteredArray = filterHandleChange(sortedContacts, filter)

  const dispatch = useDispatch()
  // const addContact = (payload) => {
 
  //     const findSameNumber=sortedContacts?.find(contact=>contact.name.toLowerCase()===payload.name.toLowerCase())
  //         if (findSameNumber) {
  //           Notify.failure("this name already in list")
  //           return
  //           } 
  //         dispatch(ADD_CONTACTS(payload))
  //       return sortedContacts
  // }
 
  const setFilterContacts = (e) => dispatch(setFilter(e.target.value))
  
  const deleteContacts = id =>dispatch(REMOVE_CONTACTS(id))
  
  
     return (
      <StyledApp>
        <h1>Phonebook</h1>
               <FormByFormik/>
         <h2>Contacts</h2>
         <Filter onChange={setFilterContacts} value={filter} />
         {contactsApp.length>0&&<ContactsList data={filteredArray} onClick={deleteContacts} /> }
       
     
     </StyledApp>
    )
}



