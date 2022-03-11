/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import type { Node } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import Greeting from './components/Greeting'
import Box from './components/Box'

const App: () => Node = () => {

  const [visible, setVisible] = useState(true)

  const onPress = () => {
    setVisible(!visible)
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <Greeting />
        {
          visible && (
            <Box
              rounded
              size='medium'
              backgroundColor='red'
            />
          )
        }
        <Button title='토글' onPress={onPress} />
      </SafeAreaView>
    </>

  )
}


export default App
