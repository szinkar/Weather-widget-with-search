const clearIcByClick = (filed, search, clear, info) => {
  if(filed.value !== '') {
    search.classList.remove('search__btn_none')
    
    clear.classList.remove('search__btn-delete')
    clear.classList.add('search__btn-delete_none')

    filed.value = ''
    info.textContent = ''
  }
}

export {clearIcByClick}