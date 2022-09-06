export const filterHandleChange = (arr, filter) => {
  if (!arr) return
  if(!filter)return arr
    const filteredArray = arr.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      || contact.number.includes(filter.trim()))
    return filteredArray
  }
