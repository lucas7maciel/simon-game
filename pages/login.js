import { useState } from "react"
import { TextInput, View, Image, Pressable, Text, StyleSheet, SafeAreaView } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export const Login = (props) => {
  const [nick, setNick] = useState("lucas")
  const [passw, setPassw] = useState("batata")

  const [message, setMessage] = useState("Uga Uga")

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
    <View style={style.container}>
      <Image 
        style={style.image}
        source={require('../assets/icon.png')}
      />

      <SafeAreaView>
        <TextInput 
          style={style.input}
          value={nick}
          onChangeText={setNick}
        />
        <TextInput 
          style={style.input}
          value={passw}
          onChangeText={setPassw}
        />  
      </SafeAreaView>
    
      <Text style={style.message}>{message}</Text>

      <Pressable 
        style={style.button}
        onPress={login}
      >
        <Text style={style.button.text}>Enter</Text>
      </Pressable>

      <Text style={style.signUp}>Don't have an account? Sign Up</Text>
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
  },
  signUp: {
    color: 'white'
  }
})
