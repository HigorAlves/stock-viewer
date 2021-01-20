import React from 'react'

import Lottie from 'react-lottie'

import { CardComp } from './styles'
import decreaseIcon from '~/assets/lottie/decrease'
import growthIcon from '~/assets/lottie/growth'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

type Props = {
  growth: boolean
}

export function Card({ growth }: Props) {
  return (
    <CardComp>
      <Lottie
        options={{
          ...defaultOptions,
          animationData: growth ? growthIcon : decreaseIcon
        }}
        height={60}
        width={60}
        isStopped={false}
      />
      <p>um valor normal pra ca</p>
    </CardComp>
  )
}
