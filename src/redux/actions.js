import shortid from "shortid";
import { DELETE_CONTACTS, ADD_CONTACTS, FILTER_CONTACTS } from './types';

export const addContacts = (payload) => {
    return {
        type: ADD_CONTACTS,
        payload: {
            id: shortid.generate(),
            ...payload
        }
}
}
export const removeContacts = (payload) => {
    return {
        type: DELETE_CONTACTS,
        payload
    }
}
export const filterContacts = (payload) => {
    return {
        type: FILTER_CONTACTS,
        payload
    }
}
