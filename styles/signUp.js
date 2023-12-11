
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const title = StyleSheet.create({
  position: 'absolute',
    
  top: hp('16%'),

  color: 'white',
  fontWeight: 'bold',
  fontSize: hp('10%')
})

export const inputArea = StyleSheet.create({
  position: 'absolute', 
  
  top: hp('34%'), 
  
  width: '80%', 
  height: hp('35%'), 
  
  display: 'flex', 
  justifyContent: 'center'
})

export const input = StyleSheet.create({
  flex: 1,

  marginVertical: '5.5%',

  padding: 4,

  borderRadius: 4,
  backgroundColor: 'white'
})

export const button = StyleSheet.create({
  position: 'absolute',

  top: hp('77%'),

  height: hp('7%'),

  justifyContent: 'center',

  backgroundColor: "blue",
  borderRadius: 16,

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

    paddingHorizontal: wp('20%')
  }
})

export const messageStyle = StyleSheet.create({
  position: 'absolute',
    top: hp('70%'),
    
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'white'
})

export const signIn = StyleSheet.create({
  position: 'absolute',
  
  top: hp('100%'),

  display: 'flex',
  flexDirection: 'row',

  text: {
    fontSize: hp('2%'),
    color: 'white'
  },

  yellow: {
    color: 'yellow',
    fontWeight: 'bold'
  }
})

