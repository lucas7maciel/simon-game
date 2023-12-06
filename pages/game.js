import { useState, useEffect, useRef } from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"

import { Restart } from "../components/restart"
import PadComponent from "../components/pads"
import { OptionIcon } from "../components/option-icon"

import { page } from "../styles/general"
import { game, options, points, record } from "../styles/game"

export const Game = ({navigation}) => {
  const [sequence, setSequence] = useState([])
  const [yourSequence, setYourSequence] = useState([])
  const [restart, setRestart] = useState(false)

  const [soundOn, setSoundOn] = useState(true)

  const {width, height} = Dimensions.get('window')
  const gameHeight = height / 100 * 45
  const refs = [
    useRef(), useRef(), useRef(), useRef(), useRef()
  ]

  function addRound() {
    const newNumber = Math.floor(Math.random() * 5) //number of pads

    setSequence(seq => {
      let newSeq = [...seq, newNumber]

      console.log("New Sequence")
      console.log(newSeq)

      setTimeout(() => playSequence(newSeq), 400)

      return newSeq
    })
  }

  function playSequence(sequence) {
    //triggers the animation that presses each button in the sequence
    sequence.forEach((el, index) => {
      setTimeout(() => {
        refs[el].current.pressAnimation()
      }, 500 * ++index)
    })
  }

  function playRound(number) {
    //adds the pad to the sequence and checks if the result is correct
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

  function restartGame() {
    setSequence([])
    setYourSequence([])
    addRound([])
  }
  
  useEffect(() => {
    addRound()
  }, [])

  return (
    <>
    <View style={page}>

      <View 
        style={points}
      >
        <Text style={points.text}>{sequence.length}</Text>
      </View>

      <View style={game}>

        {pads.map((pad, index) => 
          <PadComponent 
            key={index}
            ref={refs[index]}
            setSequence={() => playRound(index)}

            width={width} height={gameHeight}
            position={pad.position}
            color={pad.color}
            sound={pad.sound}

            config={{soundOn}}
          />
        )}

      </View>
        
      <View style={options}>
        <OptionIcon 
          image={require("../assets/ranking-icon.png")}
          action={() => navigation.navigate('Records')}
          size={width / 7.2}
        />

        <OptionIcon
          image={require("../assets/restart-icon.png")}
          action={restartGame}
          size={width / 7.2}
        />

        <OptionIcon 
          image={soundOn ? require("../assets/sound-on-icon.png") : require("../assets/sound-off-icon.png")}
          action={() => setSoundOn(val => !val)}
          size={width / 7.2}
        />
      </View>

      <View style={record}>
        <Text style={record.title}>RECORD</Text>
        <Text style={record.points}>XX</Text>
      </View>
    </View>

    <Restart 
      visible={restart}
      restart={() => {
        setSequence([])
        setRestart(false)
        addRound()
      }}
      />
    </>
  )
}

const pads = [
  {
    position: "top-right",
    sound: require("../sounds/g_note.mp3"),
    color: "blue"
  },
  {
    position: "top-left",
    sound: require("../sounds/a_note.mp3"),
    color: "red"
  },
  {
    position: "bottom-right",
    sound: require("../sounds/b_note.mp3"),
    color: "green"
  },
  {
    position: "bottom-left",
    sound: require("../sounds/c_note.mp3"),
    color: "yellow"
  },
  {
    position: "circle",
    sound: require("../sounds/d_note.mp3"),
    color: "purple"
  }
]
