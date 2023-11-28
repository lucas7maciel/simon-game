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
    loadUser()
  }, [])

  return (
    <View style={style.container}>
      <View style={style.navbar}>
        <Pressable style={{flex: 1, padding: 15}}
        onPress={() => navigation.navigate('Records')}>
          <Text style={style.navbar.text}>Back</Text>
        </Pressable>
        <Pressable style={{flex: 1, padding: 15, alignItems: "flex-end", backgroundColor: "green"}}
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

        <Pressable style={style.profile.deleteButton}>
          <Text style={style.profile.deleteButton.text}>Delete Account</Text>
        </Pressable>
      </View>

      <Text>Records</Text>

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
    alignItems: "center"
  },
  navbar: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",

    text: {
      color: 'white',
      fontWeight: "bold"
    }
  },
  profile: {
    alignItems: 'center',

    nick: {
      fontSize: 40,
      fontWeight: 'bold'
    },

    since: {
      fontSize: 16
    },

    image: {
      borderWidth: 3,
      borderColor: 'black',
      borderRadius: hp('25%'),

      maxHeight: hp('25%'),
      maxWidth: hp('25%'),
      objectFit: 'cover'
    },

    deleteButton: {
      backgroundColor: 'red',

      padding: 10,

      borderRadius: 4,
      borderWidth: 1.5,
      borderColor: '#8b0000',
      
      text: {
        color: 'white',
        fontWeight: 'bold'
      }
    }
  },
  hr: {
    width: '90%',

    borderWidth: 2,
    borderRadius: 1
  },
  records: {
    width: "85%",

    height: hp("35%"),

    scroll: {
      
    }
  }
})
