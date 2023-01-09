import { renderComponent } from '../utils/renderComponent.js'
import { renderComponentDaily } from '../utils/renderComponentDaily.js'
import { destructurAndCreateArray } from '../utils/destructurAndCreateArray.js'
import { checkValue } from '../utils/checkValue.js'
import { errorMessageAndClear } from '../utils/errorMessageAndClear.js'


const getDataSetValuesErrorOutPut = async ({url, urlDaily, info, varStore, elemWeather, elemForcast, varStoreDaily}) => {
  try {
      const ckeckResult = checkValue(varStore)
      const res = await fetch(`${url}${ckeckResult}`)
      errorMessageAndClear(res, info)
      const json = await res.json()


      const daily = await fetch(`${urlDaily}${ckeckResult}`)
      const dailyJSON = await daily.json()
      const newDailyArray = destructurAndCreateArray(dailyJSON)


      const [ , 
        { 
          main: { temp: tempDailyM1 }, 
          weather: [ { description: descr1, icon: icon1 } ],
          dt_txt: dtTxt1,
        },
        { 
          main: { temp: tempDailyN1 }
        },
        { 
          main: { temp: tempDailyM2 }, 
          weather: [ { description: descr2, icon: icon2 } ],
          dt_txt: dtTxt2,
        },
        { 
          main: { temp: tempDailyN2 }
        },
        { 
          main: { temp: tempDailyM3 }, 
          weather: [ { description: descr3, icon: icon3 } ],
          dt_txt: dtTxt3,
        },
        { 
          main: { temp: tempDailyN3 }
        },
        { 
          main: { temp: tempDailyM4 }, 
          weather: [ { description: descr4, icon: icon4 } ],
          dt_txt: dtTxt4, 
        },
        { 
          main: { temp: tempDailyN4 }
        },
        ,
      ] = newDailyArray


      varStoreDaily = [
        {
          tempDailyM: tempDailyM1,
          descr: descr1,
          icon: icon1,
          tempDailyN: tempDailyN1,
          date: dtTxt1,
        },
        {
          tempDailyM: tempDailyM2,
          descr: descr2,
          icon: icon2,
          tempDailyN: tempDailyN2,
          date: dtTxt2,
        },
        {
          tempDailyM: tempDailyM3,
          descr: descr3,
          icon: icon3,
          tempDailyN: tempDailyN3,
          date: dtTxt3,
        },
        {
          tempDailyM: tempDailyM4,
          descr: descr4,
          icon: icon4,
          tempDailyN: tempDailyN4,
          date: dtTxt4,
        },
      ]

      
      const {
        main: { feels_like: feelsLike, temp },
        weather: [ { main, description, icon } ],
        sys: { country },
        name, 
      } = json


      varStore = {
        ...varStore,
        name,
        country,
        main,
        description,
        icon,
        feelsLike,
        temp,
      }


      renderComponent(elemWeather, varStore)
      renderComponentDaily(elemForcast, varStoreDaily)

  } catch (error) {
    console.log(error.message)
  }
  
}


export {getDataSetValuesErrorOutPut}