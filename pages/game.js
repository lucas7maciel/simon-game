import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Pressable, Dimensions, Animated, Easing } from "react-native"
import { Restart } from "../components/restart"

export const Game = () => {
  const {width, height} = Dimensions.get('window')
  
  const gameHeight = height / 100 * 45
  
  let padMeasure = gameHeight >= width ? width : gameHeight //the lesser
  padMeasure -= padMeasure / 100 * 8
  padMeasure /= 2

  const padsMargin = 4

  const circle = padMeasure / 1.2

  //animations
  const [animPadMeasure] = useState(new Animated.Value(0))
  const [animInvCircleLeft] = useState(new Animated.Value(width / 2)) 
  const [animInvCircleTop] = useState(new Animated.Value(gameHeight / 2))
  const [animRotating] = useState(new Animated.Value(0))

  const [padTop] = useState(new Animated.Value(gameHeight / 2 + padsMargin))
  const [padLeft] = useState(new Animated.Value(width / 2 + padsMargin))

  const [sequence, setSequence] = useState([])
  const [yourSequence, setYourSequence] = useState([])
  const [restart, setRestart] = useState(false)

  Animated.sequence([
    Animated.parallel([
      Animated.timing(
        animPadMeasure, {
          toValue: padMeasure - padsMargin,
          duration: 8,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        animInvCircleLeft, {
          toValue: (width / 2) - ((padMeasure - padsMargin) / 2),
          duration: 8,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        animInvCircleTop, {
          toValue: (gameHeight / 2) - ((padMeasure - padsMargin) / 2),
          duration: 8,
          useNativeDriver: false
        }
      )
    ]), 
    //spin
    Animated.parallel([
      Animated.timing(
        animRotating, {
          toValue: 1,
          duration: 8,
          easing: Easing.linear,
          useNativeDriver: false
        }
      ),
      Animated.sequence([
        Animated.timing(
          padTop, {
            toValue: gameHeight / 2 - padMeasure,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
          }
        ), Animated.timing(
          padLeft, {
            toValue: width / 2 - padMeasure,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
          }
        ), Animated.timing(
          padTop, {
            toValue: gameHeight / 2 + padsMargin,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
          },
        ), Animated.timing(
          padLeft, {
            toValue: width / 2 + padsMargin,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
          }
        )
      ])
    ])
  ]).start()
  

  const spin = animRotating.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-360deg']
  })

  function addRound() {
    const newNumber = Math.floor(Math.random() * 5)

    setSequence(seq => {
      const newSeq = [...seq, newNumber]

      console.log("New Sequence:")
      console.log(newSeq)

      return newSeq
    })
  }

  function playRound(number) {
    console.log(number)

    setYourSequence(seq => {
      const newSeq = [...seq, number]

      if (sequence[seq.length] != number) {
        setRestart(true)
      } else if (newSeq.length == sequence.length) {
        addRound()
      } else {
        return newSeq
      }

      return []
    })
  }
  
  useEffect(() => {
    addRound()
  }, [])

  return (
    <View style={style.container}>
      <Restart 
        restart={() => {
          setSequence([])
          setRestart(false)
          addRound()
        }}

        visible={restart}
      />

      <View style={{...style.pointsContainer, top: height / 20, height: height / 5}}>
        <Text style={style.points}>{sequence.length}</Text>
      </View>

      <View style={{...style.gameContainer, top: height / 100 * 8, height: height / 100 * 45}}>
        <Animated.View
          style={{position: "absolute", left: padLeft, top: padTop,
                  width: animPadMeasure, height: animPadMeasure, zIndex: 16, 
                  backgroundColor: "orange", transform: [{rotateZ: spin}]}}
        >
          <Pressable
            class="bottom-right"
            onPress={() => playRound(0)}
            style={{width: "100%", height: "100%", backgroundColor: "green", borderBottomEndRadius: padMeasure}}
          />
        </Animated.View>
        
        <Animated.View 
          style={{position: "absolute", right: width / 2 + padsMargin, top: gameHeight / 2 + padsMargin,
                  width: animPadMeasure, height: animPadMeasure, zIndex: 6}}>
          <Pressable
            class="bottom-left"
            onPress={() => playRound(1)}
            style={{width: "100%", height: "100%",
                    borderBottomLeftRadius: padMeasure,
                    backgroundColor: "yellow"}}
          />
        </Animated.View>
        
        <Animated.View 
          style={{position: "absolute", left: width / 2 + padsMargin, bottom: gameHeight / 2 + padsMargin,
                  width: animPadMeasure, height: animPadMeasure, zIndex: 6}}>
          <Pressable
            class="top-right"
            onPress={() => playRound(2)}
            style={{width: "100%", height: "100%",
                    borderTopRightRadius: padMeasure,
                    backgroundColor: "red"}}
          />              
        </Animated.View>

        <Animated.View 
          style={{position: "absolute", right: width / 2 + padsMargin, bottom: gameHeight / 2 + padsMargin,
                  width: animPadMeasure, height: animPadMeasure, zIndex: 6}}>
          <Pressable
            class="top-left"
            onPress={() => playRound(3)}
            style={{width: "100%", height: "100%",
                    borderTopLeftRadius: padMeasure,
                    backgroundColor: "blue", zIndex: 6}}
          />
          <View
            class="pressed-border"
            style={{position: "absolute", right: -padsMargin / 2, bottom: -padsMargin / 2, 
                    width: padMeasure, height: padMeasure,
                    borderTopLeftRadius: padMeasure,
                    backgroundColor: "purple", zIndex: 5}}
          />   
        </Animated.View>
        

        <Animated.View
          class="invisible-circle"
          style={{position: "absolute", left: animInvCircleLeft, top: animInvCircleTop,
                  borderRadius: padMeasure / 2, backgroundColor: "darkblue", width: animPadMeasure, height: animPadMeasure, zIndex: 8}} 
        />

        <Pressable
          class="circle"
          onPress={() => playRound(4)}
          style={{position: "absolute", left: (width / 2) - (circle / 2), top: (gameHeight / 2) - (circle / 2),
                  borderRadius: circle / 2, backgroundColor: "purple", width: circle, height: circle, zIndex: 9}} 
        />

      </View>
        
      <View>

      </View>

      <View style={{...style.record, top: height / 100 * 95, width}}>
        <Text style={style.record.title}>Record</Text>
        <Text style={style.record.points}>50</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    height: "100%",
    width: "100%",

    backgroundColor: "darkblue"
  },
  pointsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  points: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold"
  },

  gameContainer: {
    position: "relative"
  },

  record: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",

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
  }
})

const pads = StyleSheet.create ({
  squarePad: {

  }
})
