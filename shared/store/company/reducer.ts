import { Reducer } from 'redux'

import { CompanyActions, CompanyState, CompanyTypes } from './types'

const INITIAL_STATE: CompanyState = {
  data: null,
  error: false,
  loading: false,
  stock: null
}

export const companyReducer: Reducer<CompanyState, CompanyActions> = (
  state = INITIAL_STATE,
  action: CompanyActions
) => {
  switch (action.type) {
    case CompanyTypes.GET_DATA:
      return { ...state, loading: true, stock: action.payload.stock }
    case CompanyTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }
    case CompanyTypes.FAILURE:
      return { ...state, loading: false, error: action.payload.error }

    default:
      return state
  }
}
