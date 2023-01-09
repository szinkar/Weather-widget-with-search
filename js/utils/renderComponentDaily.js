import {markupForcast} from './markupForcast.js'

const renderComponentDaily = (elemForcast, varStoreDaily) => {
  elemForcast.innerHTML = markupForcast(varStoreDaily)
}

export {renderComponentDaily}