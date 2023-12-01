import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable, ScrollView, StatusBar } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { Record } from "../components/record"

export const Profile = ({navigation}) => {
  const [nick, setNick] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [records, setRecords] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "lucas", points: 3, city: "Maceió"}, {nick: "lucas", points: 3, city: "Maceió"}, {nick: "lucas", points: 3, city: "Maceió"}])

  function loadUser() {
    console.log("Loading data")

    fetch(("http://localhost:3000/records"))
      .then((res) => {
        console.log(res)
      })
      .catch(console.log)
  }

  useEffect(() => {
    //loadUser()
  }, [])

  return (
    <View style={style.container}>
      <View style={style.navbar}>
        <Pressable style={{flex: 1, padding: 15}}
        onPress={() => navigation.navigate('Records')}>
          <Text style={style.navbar.text}>Back</Text>
        </Pressable>
        <Pressable style={{flex: 1, padding: 15, alignItems: "flex-end"}}
        onPress={() => console.log("Penis")}>
          <Text style={style.navbar.text}>Log Out</Text>
        </Pressable>
      </View>

      <View style={style.profile}>
        <Image
          style={style.profile.image}
          source={require('../assets/profile-icon.png')}
        />

        <Text style={style.profile.nick}>{nick || "Sem nick"}</Text>
        <Text style={style.profile.since}>{createdAt || "Since ???"}</Text>
      </View>

      <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: wp('4%')}}>
        <View 
          style={{borderWidth: 1, borderColor: 'white', height: 0, flex: 1, marginLeft: wp("4%")}}
        />
        <Text style={{flex: 1, fontWeight: "bold", color: "white", fontSize: 20, textAlign: "center"}}>RECORDS</Text>
        <View 
          style={{borderWidth: 1, borderColor: 'white', height: 0, flex: 1, marginRight: wp("4%")}}
        />
      </View>

      <View style={style.records}>
        <ScrollView style={style.records.scroll}>
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
      
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    backgroundColor: "white",
    alignItems: "center",

    backgroundColor: "#11001c"
  },
  navbar: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#CF7257",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    maxHeight: hp("13%"),

    text: {
      color: 'white',
      fontWeight: "bold"
    }
  },
  profile: {
    alignItems: 'center',
    justifyContent: "center",
    height: hp("43%"),

    nick: {
      marginTop: hp("1%"),
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white'
    },

    since: {
      fontSize: 16,
      color: 'white'
    },

    image: {
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: hp('25%'),

      maxHeight: hp('25%'),
      maxWidth: hp('25%'),
      objectFit: 'cover',

      backgroundColor: "white"
    }
  },
  hr: {
    width: '90%',

    borderWidth: 2,
    borderRadius: 1
  },
  records: {
    width: "85%",

    marginTop: hp("2%"),
    height: hp("40%"),

    scroll: {
      
    }
  }
})
