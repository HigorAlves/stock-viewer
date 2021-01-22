import React from 'react'

import { getStock } from '@jetpack/store/stock/selector'
import { StatusBar, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { Form, Company, Stock } from '../../containers'

export function Home() {
  const stock = useSelector(getStock)
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <View style={styles.view}>
        <SafeAreaView style={styles.container}>
          {stock ? (
            <>
              <Form />
              <Company />
              <Stock />
            </>
          ) : (
            <Text style={styles.subtitle}>Insert a valid stock code.</Text>
          )}
        </SafeAreaView>
      </View>
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
  container: {
    width: '80%'
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
})
