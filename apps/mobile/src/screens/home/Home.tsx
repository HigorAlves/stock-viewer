import React from 'react'

import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'

export function Home() {
  return (
    <>
      <StatusBar barStyle='dark-content' />

      <View style={styles.view}>
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Insert stock code. Example: TSLA / AAPL'
            autoCapitalize='characters'
          />
          <Button
            title='SEARCH STOCK'
            color='#07a88a'
            onPress={() => console.log('as')}
          />
          <Text style={styles.subtitle}>Insert a valid stock code.</Text>
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
    width: '90%'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#07a88a',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingStart: 10
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  }
})
