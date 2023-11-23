import { useState } from "react"
import { StyleSheet, View, Text, Image, TextInput } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Record } from "../components/record"

export const Records = (props) => {
  const [records, setRecords] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}])

  return (
    <View style={style.container}>
      <View style={style.navbar}>

        <View style={style.navbar.child}>
          <Image 
            style={style.navbar.icon}
            source={require("../assets/profile-icon.png")}
          />
        </View>
        
        <View style={style.navbar.child}>
          <TextInput
            style={style.navbar.searchBar}
            placeholder="Pesquisar record"
          />  
        </View>
        
        <View style={style.navbar.child}>
          <Image 
            style={style.navbar.icon}
            source={require("../assets/filter-icon.png")}
          />  
        </View>
      </View>

      <View style={style.records}>
        {records.map((record, index) => (
          <Record
            key={index}
            nick={record.nick}
            points={record.points}
            city={record.city}
          />
        ))}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    alignItems: "center"
  },
  navbar: {
    display: "flex",
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
      maxHeight: '50%',
      maxWidth: '50%',
      objectFit: 'cover'
    },

    searchBar: {
      backgroundColor: 'white'
    }
  },
  records: {
    width: '100%',
    alignItems: 'center'
  }
})