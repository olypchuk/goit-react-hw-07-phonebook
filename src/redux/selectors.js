 export const filterHandleChange = (arr,filter) => {
    const filteredArray = arr.filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
      || contact.number.includes(filter.trim()))
    return filteredArray
  }
