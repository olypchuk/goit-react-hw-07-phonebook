import React,{useEffect} from "react";
import { StyledApp } from "./Container/Container.styled";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { FormByFormik } from "./Form/Form";
import { useDispatch ,useSelector} from "react-redux";
import { setFilter } from "redux/filterSlice";
import { filterHandleChange, getContacts, filterContacts, sortedContactsFunction } from "redux/selectors";
import { fetchDeleteContacts,fetchAllContacts } from "redux/contacts-operations";



export function App() {

  const filter = useSelector(filterContacts)
  const {contacts} = useSelector(getContacts)
  const dispatch = useDispatch()
  
useEffect(() => {
dispatch(fetchAllContacts())
}, [dispatch])

  const sortedContacts = sortedContactsFunction(contacts)
  const filteredArray = filterHandleChange(sortedContacts, filter)

  const setFilterContacts = (e) => dispatch(setFilter(e.target.value))
  const deleteContacts = id =>{dispatch(fetchDeleteContacts(id))}
  
     return (
      <StyledApp>
        <h1>Phonebook</h1>
               <FormByFormik/>
         <h2>Contacts</h2>
         <Filter onChange={setFilterContacts} value={filter} />
         {contacts.length>0&&<ContactsList data={filteredArray} onClick={deleteContacts} /> }
       
     
     </StyledApp>
    )
}



