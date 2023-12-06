import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Pressable, ScrollView, StatusBar } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { Record } from "../components/record"
import { page } from "../styles/general"
import { navbar, profile, recordsTitle, records } from "../styles/profile"

export const Profile = ({navigation}) => {
  const [nick, setNick] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [recordsList, setRecordsList] = useState([{nick: "lucas", points: 3, city: "Maceió"}, {nick: "matheus", points: 5, city: "Recife"}, {nick: "lucas", points: 3, city: "Maceió"}, {nick: "lucas", points: 3, city: "Maceió"}, {nick: "lucas", points: 3, city: "Maceió"}])

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
    <View style={[page, page.centerHor]}>
      <View style={navbar}>

        <Pressable 
          style={navbar.sections}
          onPress={() => navigation.navigate('Records')}
        >
          <Text 
            style={navbar.text}
            >Back
          </Text>
        </Pressable>

        <Pressable 
          style={[navbar.sections, navbar.sections.logout]}
          onPress={() => console.log("Loggin Out")}
        >
          <Text 
            style={navbar.text}
            >Log Out
          </Text>
        </Pressable>
      </View>

      <View style={profile}>
        <Image
          style={profile.image}
          source={require('../assets/profile-icon.png')}
        />

        <Text 
          style={profile.nick}
          >{nick || "Sem nick"}
        </Text>

        <Text 
          style={profile.since}
          >{createdAt || "Since ???"}
        </Text>
      </View>

      <View style={recordsTitle}>
        <View style={[recordsTitle.hr, recordsTitle.hr.left]}/>
        <Text 
          style={recordsTitle.text}
          >RECORDS
        </Text>
        <View style={[recordsTitle.hr, recordsTitle.hr.right]}/>
      </View>

      <View style={records}>
        <ScrollView style={records.scroll}>
          {recordsList.map((record, index) => (
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
