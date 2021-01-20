import React from 'react'

import { Input } from './styles'

type Props = {
  placeholder: string
}

export function TextField({ placeholder }: Props) {
  return <Input placeholder={placeholder} />
}
