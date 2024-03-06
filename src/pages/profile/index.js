import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/Colors'

const ProfileScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.primaryColor
  }
})
export default ProfileScreen