import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native'
import Counter from './components/Counter'

const App = () => {

  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(prev => prev + 1)
  }

  const onDecrease = () => {
    setCount(prev => prev - 1)
  }

  return (
    <SafeAreaView style={styles.full}>
      <Counter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  }
})


export default App
