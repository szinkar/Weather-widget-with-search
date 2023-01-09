import { getDataSetValuesErrorOutPut } from '../../modules/getDataSetValuesErrorOutPut.js'

const searchIcnByClick = (field, clear, search, { url, urlDaily, info, varStore, elemWeather, elemForcast, varStoreDaily } ) => {
  if(field.value !== '') {
    clear.classList.remove('search__btn-delete_none')
    clear.classList.add('search__btn-delete')

    search.classList.add('search__btn_none')

    const value = varStore.name
    localStorage.setItem('query', value)
    getDataSetValuesErrorOutPut( { url, urlDaily, info, varStore, elemWeather, elemForcast, varStoreDaily } )
    info.textContent = ''
  }
  
  if(field.value === '') {
    info.textContent = "Enter data to search!"
  }
}


export {searchIcnByClick}