import { combineReducers } from 'redux'

import { companyReducer } from './company/reducer'

export const rootReducer = combineReducers({
  company: companyReducer
})

export type RootState = ReturnType<typeof rootReducer>
