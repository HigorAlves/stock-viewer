import React from 'react'

import { Main } from '~/assets/styles/home'
import { StockForm, MemoizedCompany, MemoizedStock } from '~/containers'

export default function Home(): JSX.Element {
  return (
    <Main>
      <StockForm />
      <MemoizedCompany />
      <MemoizedStock />
    </Main>
  )
}
