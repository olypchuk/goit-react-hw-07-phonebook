import { DELETE_CONTACTS, ADD_CONTACTS, FILTER_CONTACTS } from './types';

const INITIAL_STORE = {
  
    contacts: [],
    filter: ''
 
}

const reducer = (store = INITIAL_STORE, {type,payload}) => {
console.log('payload :>> ', payload);
    switch (type) {
        case ADD_CONTACTS:
            return {...store,contacts:[...store.contacts,payload]}
        case DELETE_CONTACTS:
            const newContacts = store.contacts.filter(({ id }) => id !== payload)
            return { ...store, contacts:newContacts }
        
        case FILTER_CONTACTS:
            return {...store,filter:payload}

    
        default:
         return store    
    }
  
}
export default reducer

//   contacts: {
//     items: [],
//     filter: ''
//   }



 
    // contacts: [],
    // filter: ''
  