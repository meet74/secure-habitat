import { View, Dimensions, SafeAreaView, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constant/Colors'
import { AntDesign } from '@expo/vector-icons'
import { dummyData } from '../../constant/DummyData'
import GridCard from '../../components/GridCard'
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen')

const SearchScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const propsData = useSelector((state) => state.properties);

  const searchData = (text) => {
    return propsData.props.filter(item => item.city.toLowerCase().includes(text.toLowerCase()));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputDecoration}>
        <AntDesign
          name="search1"
          size={24}
          color={"rgba(37, 176, 243,0.6)"}
        />
        <TextInput
          placeholderTextColor={"rgba(37, 176, 243,0.6)"}
          placeholder="Search by city..."
          style={styles.inputText}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={searchData(searchQuery)}
        
        //contentContainerStyle={{ alignSelf: "center" }}
        renderItem={({ item }) => {
          return <GridCard item={item} props={props} showIcon={false} cardstyles={{
            height: 150,
            width: "90%",
            alignSelf:"center",
            cardAddressSize: 16,
            cardPriceSize: 16,
            iconSize: 20
          }} />
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor
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
