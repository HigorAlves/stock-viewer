import React from 'react'

import { Main } from '~/assets/styles/home'
import { StockForm, Company } from '~/containers'

export default function Home(): JSX.Element {
  return (
    <Main>
      <StockForm />
      <Company />
    </Main>
  )
}
