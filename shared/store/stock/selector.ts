import { RootState } from '../rootReducer'
import { Stock } from './types'

export function getStock(state: RootState): Stock {
  return state.stock.data
}

export function hasError(state: RootState) {
  return state.stock.error
}
