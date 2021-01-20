import React from 'react'

import { useSelector } from 'react-redux'

import { Wrapper } from './styles'
import { Box } from '~/components/Box/Box'
import { getCompany } from '~/store/company/selector'
import { RootState } from '~/store/rootReducer'

export function Company() {
  const company = useSelector((state: RootState) => getCompany(state))

  return (
    <Box className='row'>
      <Wrapper className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
        <h1>{company?.companyName}</h1>
        <h5>{company?.industry}</h5>

        <h5>
          {company?.country} - {company?.city}
        </h5>
      </Wrapper>
      <Wrapper className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
        <h3>{company?.website}</h3>
        <h5>{company?.sector}</h5>

        <h5>
          {company?.country} - {company?.city}
        </h5>
      </Wrapper>
    </Box>
  )
}

export const MemoizedCompany = React.memo(Company)
