import React, { useState } from 'react'

import { load as getCompany } from '@jetpack/store/company/actions'
import { load as getStock } from '@jetpack/store/stock/actions'
import { StyleSheet, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

export function Form() {
  const [stock, setData] = useState<string>('')
  const dispatch = useDispatch()

  function getData() {
    dispatch(getCompany(stock))
    dispatch(getStock(stock))
  }

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder='Insert stock code. Example: TSLA / AAPL'
        autoCapitalize='characters'
        onChangeText={setData}
      />
      <Button title='SEARCH STOCK' color='#07a88a' onPress={getData} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#07a88a',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingStart: 10
  }
})
