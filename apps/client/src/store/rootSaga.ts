import { all, takeLatest } from 'redux-saga/effects'

import { load } from './company/sagas'
import { CompanyTypes } from './company/types'

export function* rootSaga() {
  return yield all([takeLatest(CompanyTypes.GET_DATA, load)])
}
