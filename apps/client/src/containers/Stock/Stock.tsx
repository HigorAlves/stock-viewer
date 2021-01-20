import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import { Wrapper } from './styles'
import growthIcon from '~/assets/lottie/growth'
import { Card } from '~/components'
import { getStock } from '~/store/stock/selector'

export function Stock() {
  const data = useSelector(getStock)

  return (
    <Wrapper className='row center-xs'>
      <div className='col-xs-12 col-sm-2 col-md-4 col-lg-2'>
        <Card
          icon={growthIcon}
          value={data.quote.latestPrice}
          text='Latest Price'
        />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card
          icon={growthIcon}
          value={data.quote.changePercent}
          text='Change'
        />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card
          icon={growthIcon}
          value={data.quote.avgTotalVolume}
          text='Total Volume'
        />
      </div>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7'>
        <LineChart
          width={600}
          height={300}
          data={data.chart}
          margin={{ top: 60 }}
        >
          <Line type='monotone' dataKey='close' stroke='#07A88A' />
          <CartesianGrid stroke='#fff' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </Wrapper>
  )
}

export const MemoizedStock = React.memo(Stock)
