import React from 'react'

import { Container } from './styles'

type Props = {
  children: React.ReactNode
  className?: string
  column?: boolean
}

export function Box({ children, className, column }: Props) {
  return (
    <Container column={column} className={className}>
      {children}
    </Container>
  )
}
