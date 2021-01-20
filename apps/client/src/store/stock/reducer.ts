import { Reducer } from 'redux'

import { StockActions, StockState, StockTypes } from './types'

const INITIAL_STATE: StockState = {
  data: null,
  error: false,
  loading: false
}

export const stockReducer: Reducer<StockState> = (
  state = INITIAL_STATE,
  action: StockActions
) => {
  switch (action.type) {
    case StockTypes.GET_DATA:
      return { ...state, loading: true }
    case StockTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }
    case StockTypes.FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    default:
      return state
  }
}
