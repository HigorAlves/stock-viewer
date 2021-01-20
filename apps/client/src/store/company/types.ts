/**
 * Data Types
 */

export interface Company {
  CEO: string
  address: string
  address2: string
  city: string
  companyName: string
  country: string
  description: string
  employees: number
  exchange: string
  industry: string
  issueType: string
  phone: string
  primarySicCode: number
  sector: string
  securityName: string
  state: string
  symbol: string
  tags: string[]
  website: string
  zip: string
}

/**
 * State type
 */
export interface CompanyState {
  readonly data: Company | null
  readonly loading: boolean
  readonly error: boolean
  readonly stock: string
}

/**
 * Actions Type
 */
export enum CompanyTypes {
  'GET_DATA' = '@COMPANY/LOAD_REQUEST',
  'SUCCESS' = '@COMPANY/LOAD_SUCCESS',
  'FAILURE' = '@COMPANY/LOAD_FAILURE'
}

export interface LoadData {
  type: typeof CompanyTypes.GET_DATA
  payload: {
    loading: boolean
    stock: string
  }
}

export interface LoadSuccess {
  type: typeof CompanyTypes.SUCCESS
  payload: {
    data: Company
    loading: boolean
  }
}

export interface LoadError {
  type: typeof CompanyTypes.FAILURE
  payload: {
    error: boolean
    loading: boolean
  }
}

export type CompanyActions = LoadData | LoadSuccess | LoadError
