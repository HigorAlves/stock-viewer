import React from 'react'

import { useSelector } from 'react-redux'

import { getCompany } from '~/store/company/selector'
import { RootState } from '~/store/rootReducer'

export function Company() {
  const company = useSelector((state: RootState) => getCompany(state))
  console.log(company)

  return <h1>{company?.companyName}</h1>
}
