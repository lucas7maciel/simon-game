import { useState, useEffect } from "react"
import { StyleSheet, Button, Text, View, Pressable } from "react-native"
import { Restart } from "../components/restart"

export const Game = () => {
  const [sequence, setSequence] = useState([])
  const [yourSequence, setYourSequence] = useState([])
  const [restart, setRestart] = useState(false)

  function addRound() {
    const newNumber = Math.floor(Math.random() * 4)

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
        return []
      }

      if (newSeq.length == sequence.length) {
        addRound()
        return []
      }

      return newSeq
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
      <Text>Amo Minha Mulher</Text>
      <Text>{sequence.length}</Text>

      <View>
        <Pressable
          style={style.pad}
          onPress={() => playRound(0)}
        >
          <Text>1</Text>

        </Pressable>

        <Pressable
          style={style.pad}
          onPress={() => playRound(1)}
        >
          <Text>2</Text>

        </Pressable>

        <Pressable
          style={style.pad}
          onPress={() => playRound(2)}
        >
          <Text>3</Text>
        </Pressable>

        <Pressable
          style={style.pad}
          onPress={() => playRound(3)}
        >
          <Text>4</Text>
        </Pressable>
      </View>

      <Button
        title="Round"
        onPress={() => addRound()}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  pad: {
    border: "solid",
    backgroundColor: "red",
    width: 50,
    height: 50
  }
})