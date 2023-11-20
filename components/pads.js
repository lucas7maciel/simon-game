import { useState, useImperativeHandle, forwardRef, useEffect } from "react"
import { Pressable, StyleSheet, Animated, Easing } from "react-native"
import { Audio } from 'expo-av';

const PadComponent = (props, ref) => {
  
  useImperativeHandle(ref, () => ({
    pressAnimation: () => {
      playSound()
      pressedAnim.start()
    }
  }))

  //
  const [animPadMeasure] = useState(new Animated.Value(0))
  const [padOpacity] = useState(new Animated.Value(0))
  const [borderOpacity] = useState(new Animated.Value(0))

  const [animInvCircleLeft] = useState(new Animated.Value(props.width / 2))
  const [animInvCircleTop] = useState(new Animated.Value(props.height / 2))

  const [sound, setSound] = useState()

  //
  let padMeasure = Math.min(props.height, props.width)
  padMeasure -= padMeasure / 100 * 8
  padMeasure /= 2

  const circleMeasure = padMeasure / 1.2
  const padsMargin = padMeasure / 37

  const rightOrLeft = properties[props.position]["rightOrLeft"]
  const topOrBottom = properties[props.position]["topOrBottom"]
  const radiusCorner = properties[props.position]["radiusCorner"]
  const nullBorderX = properties[props.position]["nullBorderX"]
  const nullBorderY = properties[props.position]["nullBorderY"]

  //
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

      zIndex: 7
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
    }, innerPad: {
      position: "absolute", 
      [topOrBottom]: -3, 
      [rightOrLeft]: -4,

      width: (padMeasure - padsMargin) / 2, 
      height: (padMeasure - padsMargin) / 2, 
      
      [radiusCorner]: padMeasure,
      borderColor: "#11001c", //background color
      [nullBorderX]: 2, 
      [nullBorderY]: 2, 
      backgroundColor: "#11001c", 
    
      zIndex: 1000 //mudar isso
    },
    innerPadBorder: {
      position: "absolute", 
      [topOrBottom]: -2, 
      [rightOrLeft]: -2,

      width: (padMeasure - padsMargin) / 2, 
      height: (padMeasure - padsMargin) / 2, 

      backgroundColor:"white",
      
      [radiusCorner]: padMeasure,
      borderColor: "white", 
      borderWidth: 2,
      [nullBorderX]: 0,
      [nullBorderY]: 0, 
      
      opacity: borderOpacity, 
      zIndex: 1000
    },

    //circle
    circle: {
      position: "absolute",
      [rightOrLeft]: (props.width - circleMeasure) / 2, 
      [topOrBottom]: (props.height -circleMeasure) / 2,

      width: circleMeasure, 
      height: circleMeasure,

      backgroundColor: props.color, 
      [radiusCorner]: circleMeasure,
 
      zIndex: 7
    },
    invisibleCircle: {
      position: "absolute", 
      left: animInvCircleLeft, 
      top: animInvCircleTop,

      width: animPadMeasure, 
      height: animPadMeasure,

      borderRadius: circleMeasure, 
      backgroundColor: "#11001c", 
      
      zIndex: 5
    },
    circleBorder: {
      position: "absolute",
      left: (props.width - circleMeasure - padsMargin) / 2,
      top: (props.height - circleMeasure - padsMargin) / 2,

      width: circleMeasure + padsMargin,
      height: circleMeasure + padsMargin,

      borderRadius: circleMeasure,
      backgroundColor: "white",
      opacity: borderOpacity,

      zIndex: 6
    }
  })

  //Animations
  Animated.parallel([
    Animated.timing(
      animPadMeasure, {
        toValue: padMeasure - padsMargin,
        duration: 900,
        easing: Easing.bounce,
        useNativeDriver: false
      }
    ),
    Animated.timing(
      animInvCircleLeft, {
        toValue: (props.width / 2) - ((padMeasure - padsMargin) / 2),
        duration: 900,
        easing: Easing.bounce,
        useNativeDriver: false
      }
    ),
    Animated.timing(
      animInvCircleTop, {
        toValue: (props.height / 2) - ((padMeasure - padsMargin) / 2),
        duration: 900,
        easing: Easing.bounce,
        useNativeDriver: false
      }
    )
  ]).start()

  const pressedAnim = Animated.sequence([
    Animated.parallel([
      Animated.timing(
        borderOpacity, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true
        }
      ),
      Animated.timing(
        padOpacity, {
          toValue: 0.2,
          duration: 120,
          useNativeDriver: true
        }
      )
    ]),
    Animated.delay(110),
    Animated.parallel([
      Animated.timing(
        borderOpacity, {
          toValue: 0,
          duration: 140,
          useNativeDriver: true
        },
        padOpacity, {
          toValue: 1,
          duration: 140,
          useNativeDriver: true
        }
      )
    ])
  ])

  function playSound() {
    Audio.Sound.createAsync(props.sound)
    .then(res => {
      const {sound} = res

      setSound(sound)

      if (props.config.soundOn) {
        sound.playAsync()
      }
    })
  }

  useEffect(() => {
    return sound ?
      () => {sound.unloadAsync()} : 
      undefined;
  }, [sound])

  function playRound() {
    playSound()
    pressedAnim.start()
    props.setSequence()
  }

  return props.position != "circle" ? (
    <Animated.View 
      style={style.container}>

      <Pressable
        ref={props.reference}
        onPress={() => playRound()}
        style={style.pad}
      />

      <Animated.View
        style={style.border}
      />   

      <Animated.View
        class="innerpad-border"
        style={style.innerPadBorder}
      />
    </Animated.View>
  ) : (
    <>
    <Pressable 
      ref={props.reference}
      onPress={() => playRound()}
      style={style.circle}
    />

    <Animated.View
      style={style.invisibleCircle} 
    />

    <Animated.View 
      style={style.circleBorder}
    />
    </>
  )
}

export default forwardRef(PadComponent)

const properties = {
  "bottom-left": {
    rightOrLeft: "right",
    topOrBottom: "top",
    radiusCorner: "borderBottomLeftRadius",
    nullBorderX: "borderRightWidth",
    nullBorderY: "borderTopWidth"
  },
  "bottom-right": {
    rightOrLeft: "left",
    topOrBottom: "top",
    radiusCorner: "borderBottomRightRadius",
    nullBorderX: "borderLeftWidth",
    nullBorderY: "borderTopWidth"
  },
  "top-left": {
    rightOrLeft: "right",
    topOrBottom: "bottom",
    radiusCorner: "borderTopLeftRadius",
    nullBorderX: "borderRightWidth",
    nullBorderY: "borderBottomWidth"
  },
  "top-right": {
    rightOrLeft: "left",
    topOrBottom: "bottom",
    radiusCorner: "borderTopRightRadius",
    nullBorderX: "borderLeftWidth",
    nullBorderY: "borderBottomWidth"
  },
  "circle": {
    rightOrLeft: "left",
    topOrBottom: "top",
    radiusCorner: "borderRadius"
  }
}
