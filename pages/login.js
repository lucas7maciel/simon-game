import { useEffect, useState } from "react"
import { TextInput, View, Image, Pressable, Text, StyleSheet, SafeAreaView } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export const Login = ({navigation}) => {
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

      <SafeAreaView style={style.inputArea}>
        <TextInput 
          style={style.inputArea.input}
          value={nick}
          onChangeText={setNick}
        />
        <TextInput 
          style={style.inputArea.input}
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

      <Pressable 
        style={style.signUp}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={style.signUp.text}>Don't have an account? </Text>
        <Text style={[style.signUp.text, {color: 'yellow', fontWeight: 'bold'}]}>Sign Up</Text>  
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

  image: {
    position: "absolute",
    top: hp('18%'),

    maxWidth: hp('30%'),
    maxHeight: hp('30%'),
    objectFit: "cover"
  },

  inputArea: {
    position: 'absolute', 
    top: hp('54%'), 
    
    width: '80%', 
    height: hp('18%'), 
    
    display: 'flex', 
    justifyContent: 'center',
  
    input: {
      flex: 1,
  
      //height: '40%',
      marginVertical: '3%',
  
      padding: 4,
  
      borderRadius: 4,
      backgroundColor: 'white'
    }
  },

  button: {
    position: 'absolute',
    top: hp('80%'),

    justifyContent: 'center',

    backgroundColor: "blue",
    borderRadius: 16,

    height: hp('7%'),

    text: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',

      paddingVertical: 10,
      paddingHorizontal: wp('20%')
    }
  },
  message: {
    position: 'absolute',
    top: hp('74%'),
    
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'white'
  },
  signUp: {
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
