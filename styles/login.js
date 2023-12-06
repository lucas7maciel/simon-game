import { StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export const image = StyleSheet.create({
  position: "absolute",
  
  top: hp('18%'),

  maxWidth: hp('30%'),
  maxHeight: hp('30%'),
  
  objectFit: "contain"
}) 

export const inputArea = StyleSheet.create({
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
})

export const button = StyleSheet.create({
  position: 'absolute',
  
  top: hp('80%'),

  height: hp('7%'),

  justifyContent: 'center',

  backgroundColor: "blue",
  borderRadius: 16,

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

    paddingVertical: 10,
    paddingHorizontal: wp('20%')
  }
})

export const messageStyle = StyleSheet.create({
  position: 'absolute',
  
  top: hp('74%'),
    
  fontSize: hp('2%'),
  fontWeight: 'bold',
  color: 'white'
})

export const signUp = StyleSheet.create({
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
