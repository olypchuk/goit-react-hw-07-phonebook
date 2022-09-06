import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    ADD_CONTACTS: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: shortid.generate()
          }
        }
    
      }


    },
    REMOVE_CONTACTS:{
      reducer:(state,{payload})=>state.filter(({ id }) => id !== payload)
    }
  }
}
  )

export const { ADD_CONTACTS,REMOVE_CONTACTS } = contactsSlice.actions

export default contactsSlice.reducer