import React from 'react'

type Props = {
  schema: string
}

export function JsonLd({ schema }: Props) {
  return <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema)
    }}
  />
}
