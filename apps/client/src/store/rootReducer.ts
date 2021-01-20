import { combineReducers } from 'redux'

import { companyReducer } from './company/reducer'
import { stockReducer } from './stock/reducer'

export const rootReducer = combineReducers({
  company: companyReducer,
  stock: stockReducer
})

export type RootState = ReturnType<typeof rootReducer>
