import { RootState } from '../rootReducer'

export function getCompany(state: RootState) {
  return state.company.data
}
