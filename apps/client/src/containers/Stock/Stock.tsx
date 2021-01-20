import React, { useState } from 'react'
import 'flexboxgrid'

import growthIcon from '~/assets/lottie/growth'
import { Button, TextField, Card } from '~/components'
import { StockInterface } from '~/interfaces/stock'
import { getStock, getBatch, getCompany } from '~/services/iexcloud'

export function Stock() {
  const [stock, setStock] = useState<StockInterface>()
  const [name, setName] = useState<string>('twtr')

  async function get(stock: string) {
    // const data = await getStock(stock)
    // setStock(data)
    // const test = await getCompany('aapl')
    // console.log(test)
  }

  return (
    <>
      <section
        className='row center-md center-sm'
        style={{ margin: 0, marginBottom: 40 }}
      >
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-2'>
          <TextField />
        </div>
        <div className='col-xs-12 col-sm-2 col-md-1 col-lg-1'>
          <Button text='as' onClick={() => get(name)} />
        </div>
      </section>
      <section className='row center-md center-sm' style={{ margin: 0 }}>
        <div className='col-xs-12 col-sm-2 col-md-4 col-lg-2'>
          <Card
            icon={growthIcon}
            value={stock?.latestPrice || 0}
            text='Latest Price'
          />
        </div>
        <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
          <Card icon={growthIcon} value={stock?.change || 0} text='Change' />
        </div>
        <div className='col-xs-12 col-sm-3 col-md-4 col-lg-2'>
          <Card
            icon={growthIcon}
            value={stock?.avgTotalVolume || 0}
            text='Total Volume'
          />
        </div>
      </section>
    </>
  )
}
