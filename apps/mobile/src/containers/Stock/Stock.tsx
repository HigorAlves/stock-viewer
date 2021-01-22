import React from 'react'

import { getStock } from '@jetpack/store/stock/selector'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { Card } from '../../components'

export function Stock() {
  const stock = useSelector(getStock)

  return (
    <View>
      <Card title='Latest Price' value={stock?.quote.latestPrice} />
      <Card title='Change' value={stock?.quote.change} />
      <Card title='Total Volume' value={stock?.quote.avgTotalVolume} />
    </View>
  )
}
