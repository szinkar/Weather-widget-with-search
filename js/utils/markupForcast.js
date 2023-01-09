const markupForcast = (varStoreDaily) => {

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  const out = varStoreDaily.map((key, index) => {
    
    let parseDate = Date.parse(varStoreDaily[index].date)
    let thisDay = new Date(parseDate)
    let dayValue = thisDay.getDay()

    return ` <div class="weather__block">
              <div class="weather__day">
                <span class="weather__day-week">${days[dayValue]}</span>
              </div>
              <div class="weather__cloud-icon">
                <img class="weather__icon" src="http://openweathermap.org/img/wn/${varStoreDaily[index].icon}@2x.png" alt="${varStoreDaily[index].descr}">
              </div>
              <div class="weather__forecast-descr">
                <span class="weather__forecast-clouds">${varStoreDaily[index].descr}</span>
              </div>
              <div class="weather__forecast-values">
                <span class="weather__forecast-min">${Math.round(varStoreDaily[index].tempDailyM)}&#176;C</span><hr>
                <span class="weather__forecast-max">${Math.round(varStoreDaily[index].tempDailyN)}&#176;C</span>
              </div>
            </div>`
    })

    let res = out.join(' ')
    return res
}

export {markupForcast}