import React from 'react'

import { ButtonC } from './styles'

type Props = {
  onClick: () => void
}

export function Button({ onClick }: Props) {
  return <ButtonC onClick={onClick}>Buscar</ButtonC>
}
