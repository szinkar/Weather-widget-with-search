const markupMain = (varStore) => {
  return `<div class="weather__temp">
            <span class="weather__temp-value">${Math.round(varStore.temp)}&#176;C</span><hr>
            <span class="weather__feels-like">Feels-like ${Math.round(varStore.feelsLike)} &#176;C</span>
          </div>
          <div class="weather__clouds">
            <span class="weather__description">${varStore.main}</span><hr>
            <span class="weather__city">${varStore.name}, ${varStore.country}</span>
          </div>
          <div class="weather__image">
            <img class="weather__picture" src="https://openweathermap.org/img/wn/${varStore.icon}@2x.png" alt="${varStore.description}">
          </div>`
}

export {markupMain}