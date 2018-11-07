import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '35%',
    left: '25%',
    width: 140,
    height: 140,
  },
})

export default Loading
