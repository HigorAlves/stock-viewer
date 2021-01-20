import React from 'react'

import Lottie from 'react-lottie'

import { Wrapper } from './style'
import icon from '~/assets/lottie/bar-chart'
import { Button, TextField } from '~/components'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: icon,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export function StockForm() {
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        style={{ margin: 'auto' }}
      />
      <Wrapper className='row center-md center-xs'>
        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
          <TextField placeholder='Insert stock code. Example: AAPL / TWTR' />
        </div>
        <div className='col-xs-12 col-sm-2 col-md-1 col-lg-1'>
          <Button text='Search stock' />
        </div>
      </Wrapper>
    </>
  )
}
