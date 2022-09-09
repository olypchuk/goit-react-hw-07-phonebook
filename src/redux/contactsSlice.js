import { createSlice } from "@reduxjs/toolkit";
import { fetchAllContacts,fetchAddContacts ,fetchDeleteContacts} from "./contacts-operations";

// export const contactsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     ADD_CONTACTS: {
//       reducer: (state, { payload }) => {
//         state.push(payload)
//       },
//       prepare: (data) => {
//         return {
//           payload: {
//             ...data,
//             id: shortid.generate()
//           }
//         }
    
//       }

//     },
//     REMOVE_CONTACTS:{
//       reducer:(state,{payload})=>state.filter(({ id }) => id !== payload)
//     }
//   }
// }
// )
const initialState = {
  contacts: [],
  loading: false,
  error:null
}
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchAllContacts.pending]: (store) => {
      store.loading = true;
      store.error = null
    },
    [fetchAllContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = payload
    },
    [fetchAllContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchAddContacts.pending]: (store) => {
      store.loading = true;
      store.error = null
    },
    [fetchAddContacts.fulfilled]: (store, { payload }) => {
   
      store.loading = false;
      store.contacts.push(payload)
    },
    [fetchAddContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchDeleteContacts.pending]: (store) => {
      store.loading = true;
      store.error = null
    },
    [fetchDeleteContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.contacts = store.contacts.filter(({ id })=>id!==payload)
    },
     [fetchDeleteContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

  }
  })


export default contactsSlice.reducer