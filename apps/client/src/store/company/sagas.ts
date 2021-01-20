import { call, put } from 'redux-saga/effects'

import { getCompany } from '~/services/iexcloud'
import { loadSuccess, loadFailure } from '~/store/company/actions'

export function* load(action) {
  try {
    const { stock } = action.payload
    const response = yield call(getCompany, stock)

    yield put(loadSuccess(response))
  } catch (error) {
    yield put(loadFailure())
  }
}
