import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView,Platform } from 'react-native'
import DateHead from './components/DateHead'
import { formatYmd } from './utils/util'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AddTodo from './components/AddTodo'
import Empty from './components/Empty'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoid}
        >
          <DateHead date={formatYmd(new Date())} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  avoid: {
    flex: 1,
  }
})


export default App
