import { RootState } from '../rootReducer'

export function getCompany(state: RootState) {
  return state.company.data
}

export function hasError(state: RootState) {
  return state.company.error
}
