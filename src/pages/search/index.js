import { View, Dimensions, SafeAreaView, StyleSheet,TextInput, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../../constant/Colors'
import {AntDesign} from '@expo/vector-icons'
import { dummyData } from '../../constant/DummyData'
import GridCard from '../../components/GridCard'


const {width,height} = Dimensions.get('screen')

const SearchScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <View style={styles.inputDecoration}>
          <AntDesign
            name="search1"
            size={24}
            color={"rgba(37, 176, 243,0.6)"}
          />
          <TextInput
            placeholderTextColor={"rgba(37, 176, 243,0.6)"}
            placeholder="Search"
            style={styles.inputText}
            
          />
        </View>

        <FlatList
        data={dummyData}
        numColumns={2}
        contentContainerStyle = {{alignSelf:"center"}}
        renderItem={({item}) => {
          return <GridCard item = {item} showIcon = {false} cardstyles = {{
            height:80,
            width:138,
            cardAddressSize:16,
            cardPriceSize:16,
            iconSize:20
          }}/>
        }}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.primaryColor
  },
  inputText: {
    padding: 10,
    flex: 1,
    color: Colors.buttonColor,
  },
  inputDecoration: {
    width: width * 0.9,
    alignSelf: "center",
    margin: 10,
    backgroundColor: "rgba(37, 176, 243,0.1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
})

export default SearchScreen