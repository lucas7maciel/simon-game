import { useState, useEffect } from "react"
import { StyleSheet, Button, Text, View, Pressable } from "react-native"
import { Restart } from "../components/restart"

export const Game = () => {
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

      <View style={{position: "absolute", top: 40}}>
        <Text style={{fontSize: 70, fontWeight: "bold"}}>{sequence.length}</Text>
      </View>

      <View style={style.padContainer}>
        <View style={{flexBasis: "100%", alignItems: "center"}}>
          <Pressable
            style={{...style.vertical, ...style.top}}
            onPress={() => playRound(0)}
          >
            <Text>1</Text>

          </Pressable>  
        </View>
        
        <View style={{flexBasis: "30%", alignItems: "center"}}>
          <Pressable
            style={{...style.horizontal, ...style.left}}
            onPress={() => playRound(1)}
          >
            <Text>2</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "20%", alignItems: "center", margin: 6}}>
          <Pressable
            style={style.center}
            onPress={() => playRound(2)}
          >
            <Text>3</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "30%", alignItems: "center"}}>
          <Pressable
            style={{...style.horizontal, ...style.right}}
            onPress={() => playRound(3)}
          >
            <Text>4</Text>
          </Pressable>  
        </View>

        <View style={{flexBasis: "100%", alignItems: "center"}}>
          <Pressable
            style={{...style.vertical, ...style.bottom}}
            onPress={() => playRound(4)}
          >
            <Text>5</Text>

          </Pressable>  
        </View>

        
      </View>

      <View style={{position: "absolute", bottom: 10, alignItems: "center"}}>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>Record</Text>
        <Text style={{fontSize: 25, fontWeight: "bold"}}>50</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    height: "100%",
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "darkblue"
  },
  padContainer: {
    width: 300,
    height: 300,

    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  //pads
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