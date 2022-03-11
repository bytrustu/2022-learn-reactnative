import React from 'react'
import { View, Text } from 'react-native'

const Greeting = ({ name = 'React Natvie'}) => {
  return (
    <View>
      <Text>Hello Greeting {name}</Text>
    </View>
  )
}

export default Greeting
