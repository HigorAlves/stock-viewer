import { call, put } from 'redux-saga/effects'

import { getBatch } from '../services/index'
import { loadSuccess, loadFailure } from './actions'
import { LoadData } from './types'

export function* load(action: LoadData) {
  try {
    const { stock } = action.payload
    const response = yield call(getBatch, stock)

    yield put(loadSuccess(response))
  } catch (error) {
    yield put(loadFailure())
  }
}
