import React, { useEffect } from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import { Wrapper } from './styles'
import growthIcon from '~/assets/lottie/growth'
import { Card } from '~/components'
import { getBatch } from '~/services/iexcloud'

export function Stock() {
  async function get() {
    const result = await getBatch('aapl')
    console.log(result)
  }

  const data = [
    {
      close: 12.83,
      date: '2021-01-18'
    },
    {
      close: 126.83,
      date: '2021-01-19'
    },
    {
      close: 129.83,
      date: '2021-01-20'
    }
  ]

  useEffect(() => {
    get()
  }, [])

  return (
    <Wrapper className='row center-xs'>
      <div className='col-xs-12 col-sm-2 col-md-4 col-lg-2'>
        <Card icon={growthIcon} value={0} text='Latest Price' />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card icon={growthIcon} value={0} text='Change' />
      </div>
      <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
        <Card icon={growthIcon} value={0} text='Total Volume' />
      </div>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7'>
        <LineChart width={600} height={300} data={data} margin={{ top: 60 }}>
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
