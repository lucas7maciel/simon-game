import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native"
import { Restart } from "../components/restart"

export const Game = () => {
  const {width, height} = Dimensions.get('window')

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

      <View style={{...style.pointsContainer, top: 0, height: height / 5}}>
        <Text style={style.points}>{sequence.length}</Text>
      </View>

      <View style={{...style.gameContainer, top: height / 100 * 10, height: height / 100 * 45}}>
        <View style={{flexBasis: "100%", alignItems: "center"}}>
          <Pressable
            style={{...pads.vertical, ...pads.top}}
            onPress={() => playRound(0)}
          >
            <Text>1</Text>

          </Pressable>  
        </View>
        
        <View style={{flexBasis: "30%", alignItems: "center"}}>
          <Pressable
            style={{...pads.horizontal, ...pads.left}}
            onPress={() => playRound(1)}
          >
            <Text>2</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "20%", alignItems: "center", margin: 6}}>
          <Pressable
            style={pads.center}
            onPress={() => playRound(2)}
          >
            <Text>3</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "30%", alignItems: "center"}}>
          <Pressable
            style={{...pads.horizontal, ...pads.right}}
            onPress={() => playRound(3)}
          >
            <Text>4</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "100%", alignItems: "center"}}>
          <Pressable
            style={{...pads.vertical, ...pads.bottom}}
            onPress={() => playRound(4)}
          >
            <Text>5</Text>

          </Pressable>  
        </View>

        
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
    justifyContent: "center",

    backgroundColor: "yellow"
  },
  points: {
    fontSize: 70,
    fontWeight: "bold"
  },

  gameContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white"
  },

  record: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",

    title : {
      fontSize: 15, 
      fontWeight: "bold"
    },

    points : {
      fontSize: 25, 
      fontWeight: "bold"
    }
  }
})

const pads = StyleSheet.create ({
  vertical: {
    width: 50,
    height: 100,

    justifyContent: "center",
    alignItems: "center"
  },
  horizontal: {
    width: 100,
    height: 50,

    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    backgroundColor: "red",

    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 3
  },
  bottom: {
    backgroundColor: "blue",

    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25
  },
  right: {
    backgroundColor: "yellow",

    borderTopEndRadius: 25,
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3,
    borderBottomEndRadius: 25
  },
  left: {
    backgroundColor: "green",

    borderTopEndRadius: 3,
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 3
  },
  center: {
    backgroundColor: "purple",

    width: 50,
    height: 50,
    borderRadius: 4,

    justifyContent: "center",
    alignItems: "center"
  }
})
