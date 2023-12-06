import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const points = StyleSheet.create({
  alignItems: "center",
  justifyContent: "center",
  top: hp("6%"), 
  height: hp("20%"),

  text: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold"
  }
})

export const game = StyleSheet.create({
  position: "relative",

  top: hp("8%"), 

  height: hp("45%")
})

export const record = StyleSheet.create({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",

  top: hp("93%"), 
  width: wp("100%"),

  title : {
    fontSize: 15, 
    color: "white",
    fontWeight: "bold"
  },

  points : {
    fontSize: 25, 
    color: "white",
    fontWeight: "bold"
  }
})

export const options = StyleSheet.create({
  position: "absolute", 

  top: hp("78%"), 
  left: wp("8.4%"), 
  
  height: hp("10%"), 
  width: wp("83.3%"),
                    
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  flexDirection: "row"
})
