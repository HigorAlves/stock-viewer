import {
  Company,
  CompanyTypes,
  LoadData,
  LoadError,
  LoadSuccess
} from './types'

export function load(stock: string): LoadData {
  return {
    type: CompanyTypes.GET_DATA,
    payload: {
      loading: true,
      stock
    }
  }
}

export function loadSuccess(data: Company): LoadSuccess {
  return {
    type: CompanyTypes.SUCCESS,
    payload: {
      data,
      loading: false
    }
  }
}

export function loadFailure(): LoadError {
  return {
    type: CompanyTypes.FAILURE,
    payload: {
      error: true,
      loading: false
    }
  }
}
