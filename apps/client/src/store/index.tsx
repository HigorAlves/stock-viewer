import { applyMiddleware, createStore, Store, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { CompanyState } from './company/types'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export interface AppState {
  company: CompanyState
}

const sagaMiddleware = createSagaMiddleware()

export const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
