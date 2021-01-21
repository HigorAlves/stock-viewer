import React from 'react'

import { useSelector } from 'react-redux'
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area
} from 'recharts'

import { Wrapper } from './styles'
import growthIcon from '~/assets/lottie/growth'
import decreaseIcon from '~/assets/lottie/decrease'
import { Card } from '~/components'
import { getStock } from '@jetpack/store/stock/selector'

export function Stock() {
  const data = useSelector(getStock)

  return (
    <Wrapper className='row center-xs'>
      <div className='col-xs-12 col-sm-2 col-md-4 col-lg-2'>
        <Card
          icon={growthIcon}
          value={data?.quote.latestPrice || 0}
          text='Latest Price'
        />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card
          icon={data?.quote.changePercent > 0 ? growthIcon : decreaseIcon}
          value={data?.quote.changePercent || 0}
          text='Change'
        />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card
          icon={growthIcon}
          value={data?.quote.avgTotalVolume || 0}
          text='Total Volume'
        />
      </div>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7'>
        <ResponsiveContainer width={'100%'} height={300}>
          <AreaChart data={data?.chart} margin={{ top: 60 }}>
            <XAxis dataKey='date' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Area
              type='monotone'
              dataKey='close'
              stroke='#07A88A'
              fill='#07A88A'
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  )
}

export const MemoizedStock = React.memo(Stock)
