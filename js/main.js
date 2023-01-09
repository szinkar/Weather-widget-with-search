'use strict'
import { getDataSetValuesErrorOutPut } from './modules/getDataSetValuesErrorOutPut.js'
import {searchIcnByClick} from './utils/search/searchIcnByClick.js'
import { clearIcByClick } from './utils/search/clearIcByClick.js'
import { clearInput } from './utils/search/clearInput.js'
import { keyboard } from './utils/search/keyboard.js'
import { handleInput } from './modules/handleInput.js'



const searchBtn = document.querySelector('.search__btn'),
      fieldSearch = document.querySelector('.search__field'),
      clearBtn = document.querySelector('.search__btn-clear'),
      searchInfo = document.querySelector('.search__info-text'),
      weatherMain = document.querySelector('.weather__main'),
      weatherForcast = document.querySelector('.weather__forecast')


let link =
    "https://api.openweathermap.org/data/2.5/weather?&APPID=ef38f940d70dea923a5f6cf3c0063156&lang=en&units=metric&q=",
  linkDaily =
    "https://api.openweathermap.org/data/2.5/forecast?&appid=ef38f940d70dea923a5f6cf3c0063156&lang=en&units=metric&q="


let store = {
  name: 'Kyiv',
  id: 0,
  country: 'UA',
  feelsLike: 0,
  temp: 0,
  main: 0,
  description: 0,
  icon: 0,
}


let storeDaily = [
    {
      tempDailyM: '',
      descr: '',
      icon: '',
      tempDailyN: '',
      date: '',
    },
    {
      tempDailyM: '',
      descr: '',
      icon: '',
      tempDailyN: '',
      date: '',
    },
    {
      tempDailyM: '',
      descr: '',
      icon: '',
      tempDailyN: '',
      date: '',
    },
    {
      tempDailyM4: '',
      descr4: '',
      icon4: '',
      tempDailyN4: '',
      date: '',
    },
]


const parameters = {
  url: link,
  urlDaily: linkDaily,
  info: searchInfo,
  varStore: store,
  elemWeather: weatherMain,
  elemForcast: weatherForcast,
  varStoreDaily: storeDaily,
}


getDataSetValuesErrorOutPut(parameters)

fieldSearch.addEventListener('input', (e) => handleInput(e, parameters) )

searchBtn.addEventListener('click', () => searchIcnByClick(fieldSearch, clearBtn, searchBtn, parameters))

clearBtn.addEventListener('click', () => clearIcByClick(fieldSearch, searchBtn, clearBtn, searchInfo))

fieldSearch.addEventListener('input', () => clearInput(fieldSearch, clearBtn, searchBtn, searchInfo))

document.addEventListener('keydown', (e) => keyboard( e, fieldSearch, clearBtn, searchBtn, parameters))


