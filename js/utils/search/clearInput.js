const clearInput = (field, clear, search, info) => {
  if(field.value === '') {
    clear.classList.remove('search__btn-delete')
    clear.classList.add('search__btn-delete_none')

    search.classList.remove('search__btn_none')
    info.textContent = ''
  }
}

export {clearInput}