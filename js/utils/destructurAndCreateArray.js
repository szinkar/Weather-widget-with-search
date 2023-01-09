import { arrayFiltering } from './arrayFiltering.js'

const destructurAndCreateArray = (dataDaily) => {
  const { list } = dataDaily
  return arrayFiltering(list)
}

export {destructurAndCreateArray}