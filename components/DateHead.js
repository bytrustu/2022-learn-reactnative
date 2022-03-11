import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const DateHead = ({
  date,
  }) => {
  return (
    <>
      <StatusBar backgroundColor='#26a69a' />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {date}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
})

export default DateHead
