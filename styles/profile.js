import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export const navbar = StyleSheet.create({
  paddingTop: StatusBar.currentHeight,
  backgroundColor: "#450BE0",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  maxHeight: hp("13%"),

  text: {
    color: 'white',
    fontWeight: "bold"
  },

  sections: {
    flex: 1, 
    padding: 15,

    logout: {
      alignItems: "flex-end"
    }
  }
})

export const profile = StyleSheet.create({
  alignItems: 'center',
  justifyContent: "center",
  height: hp("43%"),

  nick: {
    marginTop: hp("1%"),
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },

  since: {
    fontSize: 16,
    color: 'white'
  },

  image: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: hp('25%'),

    maxHeight: hp('25%'),
    maxWidth: hp('25%'),
    objectFit: 'cover',

    backgroundColor: "white"
  }
})

export const hr = StyleSheet.create({
  width: '90%',

  borderWidth: 2,
  borderRadius: 1
})

export const recordsTitle = StyleSheet.create({
  display: "flex", 

  flexDirection: "row", 
  justifyContent: "center", 
  alignItems: "center", 
  
  gap: wp('4%'),

  text: {
    flex: 1, 
    
    textAlign: "center",

    fontWeight: "bold", 
    color: "white", 
    fontSize: 20
  },

  hr: {
    flex: 1, 
    
    height: 0, 

    borderWidth: 1, 
    borderColor: 'white',

    left: {
      marginLeft: wp("4%"),
    },

    right: {
      marginRight: wp("4%"),
    }
  }
})

export const records = StyleSheet.create({
  width: "85%",

  marginTop: hp("2%"),
  
  height: hp("40%"),

  scroll: {
      
  }  
})
