const checkValue = (varStore) => {
  return localStorage.getItem('query') || varStore.name
}

export {checkValue}