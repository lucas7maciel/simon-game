import { useState } from "react"
import { Pressable, Text, StyleSheet, Animated } from "react-native"

export const Restart = (props) => {
  const [opacity, setOpacity] = useState(new Animated.Value(2))

  Animated.loop(
    Animated.timing(
      opacity, {
        toValue: 0,
        duration: 1100,
        useNativeDriver: true
      }
    )
  ).start()

  return props.visible ? (
    <Pressable 
      style={style.container}
      onPress={() => props.restart()}
    >
      <Animated.Text 
        style={{...style.text, opacity}}
      >Click Anywhere To Play Again</Animated.Text>
    </Pressable>
  ) : null
}

const style = StyleSheet.create({
  container : {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 3,

    height: "100%",
    width: "100%",

    opacity: 0.5,
    backgroundColor: "black"
  },
  text: {
    position: "absolute",
    left: 30,
    bottom: "5%",
    zIndex: 4
  }
})