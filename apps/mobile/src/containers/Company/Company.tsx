import React from 'react'

import { RootState } from '@jetpack/store/rootReducer'
import { Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export function Company() {
  const company = useSelector((state: RootState) => state.company.data)
  return (
    <>
      <Text style={styles.title}>{company?.companyName}</Text>
      <Text style={styles.subtitle}>{company?.industry}</Text>
      <Text style={styles.subtitle}>
        {company?.country} - {company?.city}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#1c1e24',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 0
  }
})
