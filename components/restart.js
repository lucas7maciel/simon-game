import { useEffect, useState } from "react"
import { Pressable, Text, StyleSheet, Animated } from "react-native"

export const Restart = (props) => {
  const [opacity, setOpacity] = useState(new Animated.Value(0))

  const fontAnim = Animated.loop(
    Animated.sequence([
      Animated.timing(
        opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        opacity, {
          toValue: 0,
          delay: 1000,
          duration: 600,
          useNativeDriver: true,
        }
      )
    ])
  )

  useEffect(() => {
    if (props.visible) fontAnim.start()
    else fontAnim.stop()
  }, [props.visible])


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
    zIndex: 10,

    height: "100%",
    width: "100%",

    alignItems: "center",

    opacity: 0.5,
    backgroundColor: "black"
  },
  text: {
    position: "absolute",
    bottom: 70,
    zIndex: 11,

    fontSize: 15,
    fontWeight: "bold",
    color: "gray"
  }
})