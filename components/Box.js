import React from 'react'
import { StyleSheet, View } from 'react-native'

const Box = ({
  rounded = false,
  size = 'small',
  backgroundColor = 'black',
}) => {
  return (
    <View style={[
      styles.box,
      sizes[size],
      rounded ? styles.rounded : null,
      {
        backgroundColor: backgroundColor,
      }
    ]} />)
}

const styles = StyleSheet.create({
  box: {
    marginTop: 50,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
  rounded: {
    borderRadius: 16,
  }
})

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
}

export default Box
