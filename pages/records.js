import { useState } from "react"
import { View, Text, Image, TextInput, ScrollView, Pressable } from "react-native"
import { Record } from "../components/record"
import { page } from "../styles/general"
import { navbar, topics, recordsStyle, topic } from "../styles/records"

export const Records = ({navigation}) => {
  const [records, setRecords] = useState([{nick: "lucas", points: 35, date: "10/1", city: "Maceió"}, {nick: "Pedro", points: 5, date: "9/1", city: "Recife"}, {nick: "Iracema", points: 6, date: "2/10", city: "Pernam"}, {nick: "lucas", points: 35, date: "10/1", city: "Maceió"}, {nick: "Pedro", points: 5, date: "9/1", city: "Recife"}, {nick: "Iracema", points: 6, date: "2/10", city: "Pernam"}, {nick: "lucas", points: 35, date: "10/1", city: "Maceió"}, {nick: "Pedro", points: 5, date: "9/1", city: "Recife"}, {nick: "Iracema", points: 6, date: "2/10", city: "Pernam"}])
  const [visibleRecords, setVisibleRecords] = useState(records)

  function filterRecord(text) {
    const upperText = text.toUpperCase()

    const filtered = records.filter(record => {
      const values = Object.values(record)

      const nick = values[0].toUpperCase()
      const city = values[2].toUpperCase()
      const points = String(values[1])

      return (
        nick.includes(upperText) ||
        city.includes(upperText) ||
        points.includes(upperText)
      )
    })

    setVisibleRecords(filtered)
  }

  return (
    <View style={[page, page.centerHor]}>
      <View style={navbar}>
        <Pressable 
          style={navbar.child}
          onPress={() => navigation.navigate('Game')}
        >
          <Image 
            style={navbar.back}
            source={require('../assets/back-icon.png')}
          />
        </Pressable>
        <View style={navbar.mainChild}>
          <TextInput 
            style={navbar.searchBar}
            onChangeText={filterRecord}
            placeholder="Search For Record"
          />
        </View>

        <Pressable 
          style={navbar.child}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image 
            style={navbar.profile}
            source={require('../assets/profile-icon.png')}
          />
        </Pressable>
      </View>

      <View style={topics}>
        <View style={[topic, topic.left]}>
          <Text 
            style={topic.text}>Points</Text>
        </View>
        <View style={[topic, topic.mid]}>
          <Text style={topic.text}>Nick</Text>
        </View>
        <View style={[topic, topic.mid]}>
          <Text style={topic.text}>Date</Text>
        </View>
        <View style={[topic, topic.right]}>
          <Text style={topic.text}>City</Text>
        </View>
      </View>

      <ScrollView 
        style={recordsStyle}
        showsVerticalScrollIndicator={false}
      >
        {visibleRecords.map((record, index) => (
          <Record
            key={index}
            nick={record.nick}
            date={record.date}
            points={record.points}
            city={record.city}
          />
        ))}  
      </ScrollView>
    </View>
  )
}
