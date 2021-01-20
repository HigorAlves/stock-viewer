import { call, put } from 'redux-saga/effects'

import { getBatch } from '~/services/iexcloud'
import { loadSuccess, loadFailure } from '~/store/stock/actions'

export function* load(action) {
  try {
    const { stock } = action.payload
    const response = yield call(getBatch, stock)

    yield put(loadSuccess(response))
  } catch (error) {
    yield put(loadFailure())
  }
}
