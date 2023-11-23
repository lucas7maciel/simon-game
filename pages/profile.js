import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { Record } from "../components/record"

export const Profile = (props) => {
  const [nick, setNick] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [records, setRecords] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}])

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
        <Text>Back</Text>
        <Text>Log Out</Text>
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
    width: '100%',
    height: '100%'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    height: hp('10%'),

    backgroundColor: 'red'
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
    alignItems: 'center'
  }
})
