const errorMessageAndClear = (resultFetch, info) => {
  let status = resultFetch.ok
  if(!status) { 
    info.textContent = "This location was not found or does not exist"
    localStorage.clear()
  }
}

export {errorMessageAndClear}