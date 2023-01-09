const filterByTime = (item) => {
  let time = item.dt_txt.split(' ')[1]
  return time === '09:00:00' || time === '18:00:00'
}

export {filterByTime}