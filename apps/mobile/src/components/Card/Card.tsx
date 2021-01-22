import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

type Props = {
  title: string
  value: number
}

export function Card({ title, value }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#20222a',
    minHeight: 60,
    borderRadius: 6,
    alignItems: 'flex-end',
    padding: 10,
    marginTop: 20
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left'
  },
  value: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
