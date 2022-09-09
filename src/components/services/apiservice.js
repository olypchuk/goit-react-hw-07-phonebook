import axios from 'axios'
axios.defaults.baseURL = 'https://6317c838ece2736550bae229.mockapi.io/api/contacts'

export const fetchContacts = async () => {
    const  res  = await axios.get('/')
    return res.data
}
export const fetchContactsAdd = async (data) => {
    const res = await axios.post('/', data)
    return res.data
}
export const fetchContactsDelete = async (id) => {
  const res = await axios.delete(`/${id}`)
  return res.data  
  
}