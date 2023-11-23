import { useEffect, useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export const SignUp = (props) => {
  const [nick, setNick] = useState("lucas8")
  const [passw, setPassw] = useState("senha")
  const [confPassw, setConfPassw] = useState("")

  const [message, setMessage] = useState("Be welcome!")

  function signUp() {
    setMessage("Signing Up")

    fetch('http://localhost:3000/createUser', {  
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "nick" : nick,
        "password" : passw
      }),
    })
    .then(res => res.json())
    .then(console.log)
    .catch(error => {
      console.log("Error")
      console.log(error)
    })
  }

  useEffect(() => {
    signUp()
  })

  return (
    <View style={style.container}>
      <Text style={style.title}>SIGN UP</Text>
      
      <SafeAreaView>
        <TextInput 
          style={style.input}
          value={nick}
          onChangeText={setNick}
          placeholder="Nick"
        />
        <TextInput 
          style={style.input}
          value={passw}
          onChangeText={setPassw}
          placeholder="Password"
        />
        <TextInput 
          style={style.input}
          value={confPassw}
          onChangeText={setConfPassw}
          placeholder="Confirm Password"
        />
      </SafeAreaView>

      <Text style={style.message}>{message}</Text>

      <Pressable style={style.button}>
        <Text style={style.button.text}>Sign Up</Text>
      </Pressable>
      <Pressable style={style.button}>
        <Text style={style.button.text}>Back</Text>
      </Pressable>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#11001c"
  },

  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },

  image: {
    maxWidth: wp('45%'),
    maxHeight: wp('45%'),
    objectFit: "cover"
  },

  input: {
    width: wp('80%'),
    height: hp('7%'),

    marginTop: hp('2%'),

    borderRadius: 4,
    backgroundColor: 'white'
  },

  button: {
    backgroundColor: "blue",
    borderRadius: 5,

    height: hp('7%'),

    text: {
      color: 'white',
      padding: 15,
    }
  },
  message: {
    color: 'white'
  }
})
