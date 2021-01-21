/**
 * Data Types
 */

export interface Stock {
  chart: [
    {
      close: number
      high: number
      low: number
      open: number
      symbol: string
      volume: number
      id: string
      key: string
      subkey: string
      date: string
      updated: number
      changeOverTime: number
      marketChangeOverTime: number
      uOpen: number
      uClose: number
      uHigh: number
      uLow: number
      uVolume: number
      fOpen: number
      fClose: number
      fHigh: number
      fLow: number
      fVolume: number
      label: string
      change: number
      changePercent: number
    }
  ]
  quote: {
    avgTotalVolume: number
    calculationPrice: string
    change: number
    changePercent: number
    companyName: string
    iexClose: number
    iexOpen: number
    iexRealtimePrice: number
    latestPrice: number
    latestTime: string
    primaryExchange: string
    symbol: string
  }
}

/**
 * State type
 */
export interface StockState {
  readonly data: Stock | null
  readonly loading: boolean
  readonly error: boolean
}

/**
 * Actions Type
 */
export enum StockTypes {
  'GET_DATA' = '@STOCK/LOAD_REQUEST',
  'SUCCESS' = '@STOCK/LOAD_SUCCESS',
  'FAILURE' = '@STOCK/LOAD_FAILURE'
}

export interface LoadData {
  type: typeof StockTypes.GET_DATA
  payload: {
    stock: string
  }
}

export interface LoadSuccess {
  type: typeof StockTypes.SUCCESS
  payload: {
    data: Stock
  }
}

export interface LoadError {
  type: typeof StockTypes.FAILURE
  payload: {
    error: boolean
  }
}

export type StockActions = LoadData | LoadSuccess | LoadError
