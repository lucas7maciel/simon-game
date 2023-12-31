import { useEffect, useState } from "react"
import { TextInput, View, Image, Pressable, Text, StyleSheet, SafeAreaView } from "react-native"
import { page } from "../styles/general"
import { button, image, inputArea, messageStyle, signUp } from "../styles/login"

export const Login = ({navigation}) => {
  const [nick, setNick] = useState("")
  const [passw, setPassw] = useState("")

  const [message, setMessage] = useState("Be Welcome!")

  function login() {
    setMessage("Logging")

    fetch(`http://192.168.1.107:3000/users/login/${nick}/${passw}`)
      .then(res => res.json())
      .then(res => {
        setMessage(res)
      })
      .catch(setMessage)
  }

  return (
    <View style={[page, page.centered]}>
      <Image 
        style={image}
        source={require('../assets/icon.png')}
      />

      <SafeAreaView style={inputArea}>
        <TextInput 
          style={inputArea.input}
          value={nick}
          onChangeText={setNick}
          placeholder="Login"
        />
        <TextInput 
          style={inputArea.input}
          value={passw}
          onChangeText={setPassw}
          placeholder="Password"
        />  
      </SafeAreaView>
    
      <Text 
        style={messageStyle}
        >{message}
      </Text>

      <Pressable 
        style={button}
        onPress={login}
      >
        <Text 
          style={button.text}
          >Enter
        </Text>
      </Pressable>

      <Pressable 
        style={signUp}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text 
          style={signUp.text}
          >Don't have an account? 
        </Text>

        <Text 
          style={[signUp.text, signUp.yellow]}
          > Sign Up
        </Text>  
      </Pressable>
      
    </View>
  )
}
