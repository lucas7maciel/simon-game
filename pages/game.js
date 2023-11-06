import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native"
import { Restart } from "../components/restart"

export const Game = () => {
  const {width, height} = Dimensions.get('window')
  
  const gameHeight = height / 100 * 45
  
  let padMeasure = gameHeight >= width ? width : gameHeight //the lesser
  padMeasure -= padMeasure / 100 * 8
  padMeasure /= 2

  const circle = padMeasure / 1.2

  console.log(`${width} ${gameHeight} ${padMeasure}`)

  const [sequence, setSequence] = useState([])
  const [yourSequence, setYourSequence] = useState([])
  const [restart, setRestart] = useState(false)

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
        <Pressable
          class="bottom-right"
          onPress={() => playRound(0)}
          style={{position: "absolute", left: width / 2, top: gameHeight / 2, 
                  width: padMeasure, height: padMeasure,
                  borderBottomRightRadius: padMeasure,
                  backgroundColor: "green"}}
        />
        <Pressable
          class="bottom-left"
          onPress={() => playRound(1)}
          style={{position: "absolute", right: width / 2, top: gameHeight / 2, 
                  width: padMeasure, height: padMeasure,
                  borderBottomLeftRadius: padMeasure,
                  backgroundColor: "yellow"}}
        />
        <Pressable
          class="top-right"
          onPress={() => playRound(2)}
          style={{position: "absolute", left: width / 2, bottom: gameHeight / 2, 
                  width: padMeasure, height: padMeasure,
                  borderTopRightRadius: padMeasure,
                  backgroundColor: "red"}}
        />
        <Pressable
          class="top-left"
          onPress={() => playRound(3)}
          style={{position: "absolute", right: width / 2, bottom: gameHeight / 2, 
                  width: padMeasure, height: padMeasure,
                  borderTopLeftRadius: padMeasure,
                  backgroundColor: "blue"}}
        />

        <View
          class="invisible-circle"
          style={{position: "absolute", left: (width / 2) - (padMeasure / 2), top: (gameHeight / 2) - (padMeasure / 2),
                  borderRadius: padMeasure / 2, backgroundColor: "white", width: padMeasure, height: padMeasure, zIndex: 5}} 
        />

        <Pressable
          class="circle"
          onPress={() => playRound(4)}
          style={{position: "absolute", left: (width / 2) - (circle / 2), top: (gameHeight / 2) - (circle / 2),
                  borderRadius: circle / 2, backgroundColor: "purple", width: circle, height: circle, zIndex: 6}} 
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
