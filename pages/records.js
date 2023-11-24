import { useState } from "react"
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, ScrollView, Pressable, StatusBar } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Record } from "../components/record"

export const Records = ({navigation}) => {
  const [records, setRecords] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}])

  return (
    <SafeAreaView style={style.container}>
      <View style={[style.navbar, {paddingTop: StatusBar.currentHeight}]}>

        <Pressable 
          style={style.navbar.child}
          onClick={() => console.log("Penis")}
        >
          <Image 
            style={style.navbar.icon}
            source={require("../assets/profile-icon.png")}
          />
        </Pressable>
        
        <View style={[style.navbar.child, {flex: 2.5}]}>
          <TextInput
            style={[style.navbar.searchBar, {alignSelf: 'stretch'}]}
            placeholder="Pesquisar record"
          />  
        </View>
        
        <Pressable 
          style={[style.navbar.child]}
          onClick={() => console.log("a")}
        >
          <Image 
            style={style.navbar.icon}
            source={require("../assets/filter-icon.png")}
          />  
        </Pressable>
      </View>

      <View
        style={{display: 'flex', flexDirection: "row", alignItems: "center", width: "90%"}}
      >
        <View style={{flex: 1, backgroundColor: "yellow", alignItems:"center", borderBottomLeftRadius: 100, borderWidth: 1.5, borderTopWidth: 0}}>
          <Text style={{fontWeight: 'bold'}}>Points</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "red", alignItems:"center", borderBottomWidth: 1.5, borderRightWidth: 1.5}}>
          <Text style={{fontWeight: 'bold'}}>Nick</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "gray", alignItems:"center", borderBottomWidth: 1.5}}>
          <Text style={{fontWeight: 'bold'}}>Date</Text>
        </View>
        <View style={{flex: 1, backgroundColor: "green", alignItems:"center", borderBottomRightRadius: 100, borderWidth: 1.5, borderTopWidth: 0}}>
          <Text style={{fontWeight: 'bold'}}>City</Text>
        </View>
      </View>

      <ScrollView 
        style={style.records}
        showsVerticalScrollIndicator={false}
      >
        {records.map((record, index) => (
          <Record
            key={index}
            nick={record.nick}
            points={record.points}
            city={record.city}
          />
        ))}  
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    alignItems: "center",
    backgroundColor: "#11001c"
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: 'green',

    height: hp('15%'),
    width: '100%',

    child: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    icon: {
      width: 50,
      height: 50, //mudar isso tambem
      borderWidth: 2.5,
      borderColor: 'black',
      borderRadius: hp('50%'), //mudar isso
      objectFit: 'cover'
    },

    searchBar: {
      borderRadius: 5,
      paddingVertical: 8, //mudar isso
      backgroundColor: 'white'
    }
  },
  records: {
    width: '90%',

    marginTop: 10
  }
})