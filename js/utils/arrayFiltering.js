import { filterByTime } from './filterByTime.js'

const arrayFiltering = (dataDailyList) => {
  return dataDailyList.filter(filterByTime)
}

export {arrayFiltering}