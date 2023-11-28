import { useState } from "react"
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, ScrollView, Pressable, StatusBar } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Record } from "../components/record"

export const Records = ({navigation}) => {
  const [records, setRecords] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "matheus", points: 5, city: "Recife"}])

  return (
    <View style={style.container}>
      <View style={{paddingTop: StatusBar.currentHeight, width: "100%", height: hp('13%'), backgroundColor: "white", display: "flex", flexDirection: "row"}}>
        <Pressable 
          style={{flex: 1, alignItems: "center", justifyContent: "center"}}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image 
            style={{width: undefined, height: "90%", aspectRatio: 1, borderWidth: 4, borderColor: "black", borderRadius: hp('15%')}}
            source={require('../assets/profile-icon.png')}
          />
        </Pressable>
        <View style={{flex: 2.5, alignItems: "center", justifyContent: "center"}}>
          <TextInput 
            style={{backgroundColor: "white", width: "85%", height: "90%"}}
            placeholder="Search For Record"
          />
        </View>
        <Pressable style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Image 
            style={{width: undefined, height: "90%", aspectRatio: 1, borderWidth: 4, borderColor: "black", borderRadius: hp('15%')}}
            source={require('../assets/filter-icon.png')}
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
    </View>
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
      width: "100%",
      height: "100%",
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