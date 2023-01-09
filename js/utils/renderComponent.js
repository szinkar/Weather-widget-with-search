import { markupMain } from './markupMain.js'

const renderComponent = (elemWeather, varStore) => {
  elemWeather.innerHTML = markupMain(varStore)
}

export {renderComponent}