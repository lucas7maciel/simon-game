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

      <SafeAreaView style={{position: 'absolute', top: hp('50%'), width: '80%', height: hp('20%'), display: 'flex', justifyContent: 'center'}}>
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
    width: '100%',
    height: '100%',

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#11001c"
  },

  image: {
    position: "absolute",
    top: hp('15%'),

    maxWidth: hp('30%'),
    maxHeight: hp('30%'),
    objectFit: "cover"
  },

  input: {
    flex: 1,

    height: '40%',
    marginVertical: '3%',

    padding: 4,

    borderRadius: 4,
    backgroundColor: 'white'
  },

  button: {
    position: 'absolute',
    top: hp('77%'),

    justifyContent: 'center',

    backgroundColor: "blue",
    borderRadius: 5,

    height: hp('7%'),

    text: {
      color: 'white',

      paddingVertical: 10,
      paddingHorizontal: 20
    }
  },
  message: {
    position: 'absolute',
    top: hp('72%'),
    
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'white'
  },
  signUp: {
    position: 'absolute',
    top: hp('100%'),

    fontSize: hp('2%'),
    color: 'white'
  }
})
