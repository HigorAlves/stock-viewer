import { all, takeLatest } from 'redux-saga/effects'

import { load } from './company/sagas'
import { CompanyTypes } from './company/types'
import { load as loadStock } from './stock/sagas'
import { StockTypes } from './stock/types'

export function* rootSaga() {
  return yield all([
    takeLatest(CompanyTypes.GET_DATA, load),
    takeLatest(StockTypes.GET_DATA, loadStock)
  ])
}
