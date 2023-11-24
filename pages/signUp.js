import { useEffect, useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

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
    <View style={style.container}>
      <Text style={style.title}>SIGN UP</Text>
      
      <SafeAreaView style={{position: 'absolute', top: hp('34%'), width: '80%', height: hp('35%'), display: 'flex', justifyContent: 'center'}}>
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

      <Pressable style={[style.button, {top: hp('77%')}]}>
        <Text style={style.button.text}>Sign Up</Text>
      </Pressable>
      
      <Pressable 
        style={style.signIn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.signIn.text}>Already have an account? </Text>
        <Text style={[style.signIn.text, {color: 'yellow', fontWeight: 'bold'}]}>Sign In</Text>  
      </Pressable>

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

  title: {
    position: 'absolute',
    top: hp('16%'),

    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('10%')
  },

  image: {
    position: "absolute",
    top: hp('18%'),

    maxWidth: hp('30%'),
    maxHeight: hp('30%'),
    objectFit: "cover"
  },

  input: {
    flex: 1,

    marginVertical: '5.5%',

    padding: 4,

    borderRadius: 4,
    backgroundColor: 'white'
  },

  button: {
    position: 'absolute',

    justifyContent: 'center',

    backgroundColor: "blue",
    borderRadius: 16,

    height: hp('7%'),

    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',

      paddingHorizontal: wp('20%')
    }
  },
  message: {
    position: 'absolute',
    top: hp('70%'),
    
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'white'
  },
  signIn: {
    position: 'absolute',
    top: hp('100%'),

    display: 'flex',
    flexDirection: 'row',

    text: {
      fontSize: hp('2%'),
      color: 'white'
    }
  }
})