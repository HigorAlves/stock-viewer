import { RootState } from '../rootReducer'
import { Stock } from './types'

export function getStock(state: RootState): Stock {
  return state.stock.data
}
