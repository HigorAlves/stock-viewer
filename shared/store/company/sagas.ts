import { call, put } from 'redux-saga/effects'

import { getCompany } from '../services/index'
import { loadSuccess, loadFailure } from './actions'
import { LoadData } from './types'

export function* load(action: LoadData) {
  try {
    const { stock } = action.payload
    const response = yield call(getCompany, stock)

    yield put(loadSuccess(response))
  } catch (error) {
    yield put(loadFailure())
  }
}
