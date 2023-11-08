import { View, Text, Dimensions } from "react-native"

export const Teste = () => {
  const {width, height} = Dimensions.get('window')

  console.log(width)

  return (
    <>
    <Text style={{fontSize: 60, fontWeight: "bold", textAlign: "center", marginTop: 60}}>AAA</Text>
    <View style={{position: "relative", marginTop: 100, width: "100%", height: 300, backgroundColor: "gray", textAlign: "center"}}>
      <View
        class="bottom-left"
        style={{position: "absolute", right: 182, top: 152, width: 98, height: 98, backgroundColor: "yellow",
                borderBottomLeftRadius: 98, borderWidth: 2}}
      ></View>
      <View
        class="bottom-right"
        style={{position: "absolute", left: 182, top: 152, width: 98, height: 98, backgroundColor: "blue",
                borderBottomRightRadius: 98}}
      ></View>
      <View
        class="top-right"
        style={{position: "absolute", left: 182, bottom: 152, width: 98, height: 98, backgroundColor: "red",
                borderTopRightRadius: 98}}
      ></View>
      <View
        class="top-left"
        style={{position: "absolute", right: 182, bottom: 152, width: 98, height: 98, backgroundColor: "purple",
                borderTopLeftRadius: 98}}
      ></View>
      <View
        class="inner-circle"
        style={{position: "absolute", left: 360 / 2 - 35, top: 300 / 2 - 35, borderRadius: 35,
                width: 70, height: 70, backgroundColor: "green", zIndex: 2}}
      ></View>
      <View
        class="outter-circle"
        style={{position: 'absolute', left: 360 / 2 - 45, top: 300 / 2 - 45, borderRadius: 45, 
                width: 90, height: 90, backgroundColor: "gray", zIndex: 1}}
      ></View>
    </View>
    </>
  )
}