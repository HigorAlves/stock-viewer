import React from 'react'

import { useSelector, useStore } from 'react-redux'

import { Main } from '~/assets/styles/home'
import { StockForm, MemoizedCompany, MemoizedStock } from '~/containers'
import {
  hasError as hasCompanyError,
  getCompany
} from '~/store/company/selector'
import { hasError as hasStockError } from '~/store/stock/selector'

export default function Home(): JSX.Element {
  const errorCompany = useSelector(hasCompanyError)
  const errorStock = useSelector(hasStockError)
  const data = useSelector(getCompany)

  return (
    <Main>
      <StockForm />
      {(!errorCompany || !errorStock) && data ? (
        <>
          <MemoizedCompany />
          <MemoizedStock />
        </>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', marginTop: 40 }}>
            Please insert a valid Stock Code!
          </h2>
        </>
      )}
    </Main>
  )
}
