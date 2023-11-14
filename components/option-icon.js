import {View, Pressable, Image, StyleSheet} from "react-native"

export const OptionIcon = (props) => {
  return (
    <View style={style.container}>
      <Pressable
        onPress={props.action}
        style={
          {...style.pressable, 
          width: props.size, 
          height: props.size, 
          borderRadius: props.size,
          borderWidth: props.size / 25
        }}
      >
            
        <Image 
          style={style.image}
          source={props.image}
        />
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  pressable: {
    alignItems: "center", 
    justifyContent: "center",

    backgroundColor: "white", 
    
    borderColor: "white",
  },
  image: {
    height: "70%", 
    width: "70%", 
    
    objectFit: "cover"
  }
})