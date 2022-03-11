import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'
import DateHead from './components/DateHead'
import { formatYmd } from './utils/util'

const App = () => {
  return (
    <SafeAreaView>
      <DateHead date={formatYmd(new Date())} />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },


})


export default App
