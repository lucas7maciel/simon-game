import { useEffect, useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { page } from "../styles/general"
import { button, input, inputArea, messageStyle, signIn, title } from "../styles/signUp"

export const SignUp = ({navigation}) => {
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
    <View style={[page, page.centered]}>
      <Text style={title}>SIGN UP</Text>
      
      <SafeAreaView style={inputArea}>
        <TextInput 
          style={input}
          value={nick}
          onChangeText={setNick}
          placeholder="Nick"
        />
        <TextInput 
          style={input}
          value={passw}
          onChangeText={setPassw}
          placeholder="Password"
        />
        <TextInput 
          style={input}
          value={confPassw}
          onChangeText={setConfPassw}
          placeholder="Confirm Password"
        />
      </SafeAreaView>

      <Text style={messageStyle}>{message}</Text>

      <Pressable style={button}>
        <Text style={button.text}>Sign Up</Text>
      </Pressable>
      
      <Pressable 
        style={signIn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text 
          style={signIn.text}
          >Already have an account?
        </Text>
        <Text 
          style={[signIn.text, signIn.yellow]}
          > Sign In
        </Text>  
      </Pressable>
    </View>
  )
}
