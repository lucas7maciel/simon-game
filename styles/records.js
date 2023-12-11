
import { StatusBar, StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

export const navbar = StyleSheet.create({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",

  height: hp('15%'),
  width: '100%',

  paddingTop: StatusBar.currentHeight,

  backgroundColor: "#450BE0",

  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  mainChild: {
    flex: 3.5, 
    alignItems: "center", 
    justifyContent: "center"
  },

  //
  icon: {
    width: "100%",
    height: "100%",
    objectFit: 'contain'
  },

  back: {
    height: "60%", 
    aspectRatio: 1, 
    objectFit: "contain"
  },

  searchBar: {
    width: "85%", 

    paddingVertical: hp("1%"), 
    paddingHorizontal: wp("2%"), 
    
    backgroundColor: "white",
    borderRadius: hp("10%")
  },

  profile: {
    height: "65%",

    aspectRatio: 1, 
    objectFit: "contain", 

    backgroundColor: "white",
    borderWidth: 2, 
    borderColor: "white", 
    borderRadius: hp('15%')
  }
})

export const topics = StyleSheet.create({
  display: 'flex', 
  flexDirection: "row", 
  alignItems: "center", 
  
  width: "90%"
})

export const topic = StyleSheet.create({
  flex: 1, 
  
  alignItems:"center", 
  
  backgroundColor: "#450BE0",
  borderWidth: 1.5, 
  borderTopWidth: 0,

  left: {
    borderBottomLeftRadius: 100, 
    borderBottomRightRadius: 6, 
  },

  mid: {
    borderBottomRightRadius: 6, 
    borderBottomLeftRadius: 6, 
  },

  right: {
    borderBottomLeftRadius: 6, 
    borderBottomRightRadius: 100, 
  },

  text: {
    fontWeight: 'bold', 
    color: "white", 
    
    paddingVertical: 5
  }
})

export const recordsStyle = StyleSheet.create({
  width: '90%',

  marginTop: 10
})

export const signIn = StyleSheet.create({

})
