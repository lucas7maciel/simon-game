import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Animated, View } from "react-native"
import { Audio } from 'expo-av';

export const Pad = (props) => {
  const [animPadMeasure] = useState(new Animated.Value(0))
  const [borderOpacity] = useState(new Animated.Value(0))
  const [animInvCircleLeft] = useState(new Animated.Value(0))
  const [animInvCircleTop] = useState(new Animated.Value(0))

  const [sound, setSound] = useState()

  const padsMargin = props.margin || 4
  let padMeasure = Math.min(props.height, props.width)
  padMeasure -= padMeasure / 100 * 8
  padMeasure /= 2

  const rightOrLeft = properties[props.position]["rightOrLeft"]
  const topOrBottom = properties[props.position]["topOrBottom"]
  const radiusCorner = properties[props.position]["radiusCorner"]

  const style = StyleSheet.create({
    container: {
      position: "absolute", 
      [rightOrLeft]: props.width / 2 + padsMargin,
      [topOrBottom]: props.height / 2 + padsMargin,

      width: animPadMeasure, 
      height: animPadMeasure
    },
    pad: {
      width: "100%", height: "100%",

      [radiusCorner]: padMeasure,
      backgroundColor: props.color, 

      zIndex: 7//4
    },
    border: {
      position: "absolute", 
      [rightOrLeft]: -padsMargin / 2, 
      [topOrBottom]: -padsMargin / 2,

      width: padMeasure, 
      height: padMeasure,

      [radiusCorner]: padMeasure,
      backgroundColor: "white", 
      opacity: borderOpacity, 

      zIndex: 3
    } 
  })

  //Animations
  Animated.parallel([
    Animated.timing(
      animPadMeasure, {
        toValue: padMeasure - padsMargin,
        duration: 800,
        useNativeDriver: false
      }
    )/*,
    Animated.timing(
      animInvCircleLeft, {
        toValue: (props.width / 2) - ((padMeasure - padsMargin) / 2),
        duration: 800,
        useNativeDriver: false
      }
    ),
    Animated.timing(
      animInvCircleTop, {
        toValue: (props.height / 2) - ((padMeasure - padsMargin) / 2),
        duration: 800,
        useNativeDriver: false
      }
    )*/
  ]).start()

  const pressedAnim = Animated.sequence([
    Animated.parallel([
      Animated.timing(
        borderOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        }
      )
      // animate color
    ]),
    Animated.parallel([
      Animated.timing(
        borderOpacity, {
          toValue: 0,
          delay: 3000,
          duration: 300,
          useNativeDriver: true
        }
        // animate color
      )
    ])
  ])

  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(require('../sounds/c_chord.mp3'));
    setSound(sound);
    await sound.playAsync();
  }


  function playRound() {
    playSound()
    pressedAnim.start()

    /*const number = 1
    console.log(number)

    props.setSequence(seq => {
      const newSeq = [...seq, number]

      if (sequence[seq.length] != number) {
        console.log("restart") //setRestart(true)
      } else if (newSeq.length == sequence.length) {
        addRound()
      } else {
        return newSeq
      }

      return []
    })*/
  }

  return (
    <Animated.View 
      style={style.container}>

      <Pressable
        onPress={() => playRound()}
        style={style.pad}
      />

      <Animated.View
        style={style.border}
      />   
    </Animated.View>
  )
}

const properties = {
  "bottom-left": {
    rightOrLeft: "right",
    topOrBottom: "top",
    radiusCorner: "borderBottomLeftRadius"
  }
}
