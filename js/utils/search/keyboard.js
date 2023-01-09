import { searchIcnByClick } from './searchIcnByClick.js'

const keyboard = (e, field, clear, search, parametersObj) => {
  e.key === 'Enter' ? searchIcnByClick(field, clear, search, parametersObj) : null
}

export {keyboard}