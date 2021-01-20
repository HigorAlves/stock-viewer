import React from 'react'

import { ButtonC } from './styles'

type Props = {
  onClick?: () => void
  htmlType?: string
  text: string
}

export function Button({ onClick, htmlType, text }: Props) {
  return (
    <ButtonC htmlType={htmlType} onClick={onClick}>
      {text}
    </ButtonC>
  )
}
