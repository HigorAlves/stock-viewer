import { Stock, StockTypes, LoadData, LoadError, LoadSuccess } from './types'

export function load(stock: string): LoadData {
  return {
    type: StockTypes.GET_DATA,
    payload: {
      stock
    }
  }
}

export function loadSuccess(data: Stock): LoadSuccess {
  return {
    type: StockTypes.SUCCESS,
    payload: {
      data
    }
  }
}

export function loadFailure(): LoadError {
  return {
    type: StockTypes.FAILURE,
    payload: {
      error: true
    }
  }
}
