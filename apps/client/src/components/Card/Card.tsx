import React from 'react'

import Lottie from 'react-lottie'

import { CardComp, Wrapper } from './styles'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

type Props = {
  value: number
  text: string
  icon: any
}

export function Card({ icon, text, value }: Props) {
  return (
    <CardComp>
      <Lottie
        options={{
          ...defaultOptions,
          animationData: icon
        }}
        height={60}
        width={60}
        isStopped={false}
        style={{ margin: 0, padding: 0 }}
      />
      <Wrapper>
        <p>{text}</p>
        <h2>{value}</h2>
      </Wrapper>
    </CardComp>
  )
}
