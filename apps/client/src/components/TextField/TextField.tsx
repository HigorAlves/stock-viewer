import React from 'react'

import { Input } from './styles'

type Props = {
  placeholder: string
}

export function TextField({ field, form, ...props }) {
  return <Input {...field} {...props} />
}
