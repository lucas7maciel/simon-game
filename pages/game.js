import { useState, useEffect, useRef } from "react"
import { StyleSheet, Text, View, Dimensions } from "react-native"
import { Restart } from "../components/restart"
import PadComponent from "../components/pads"
import { OptionIcon } from "../components/option-icon";
import G from "../sounds/g_note.mp3"
import A from "../sounds/a_note.mp3"
import B from "../sounds/b_note.mp3"
import C from "../sounds/c_note.mp3"
import D from "../sounds/d_note.mp3"

export const Game = () => {
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
    <View style={style.container}>

      <View 
        style={{
          ...style.points, 
          top: height / 100 * 6, 
          height: height / 5
        }}
      >
        <Text style={style.points.text}>{sequence.length}</Text>
      </View>

      <View style={{...style.gameContainer, top: height / 100 * 8, height: height / 100 * 45}}>

        {pads.map((pad, index) => 
          <PadComponent 
            key={index}
            ref={refs[index]}
            setSequence={() => playRound(index)}

            width={width} height={gameHeight}
            position={pad.position}
            color={pad.color}
            sound={pad.sound}
          />
        )}

      </View>
        
      <View 
        style={{
          ...style.options,
          top: height / 100 * 78, 
          left: (width / 2) - (width / 2.4), 
          height: height / 10, 
          width: width / 1.2
        }}
      >
  
        <OptionIcon 
          image={require("../assets/ranking-icon.png")}
          size={width / 7.2}
        />

        <OptionIcon
          image={require("../assets/restart-icon.png")}
          action={restartGame}
          size={width / 7.2}
        />

        <OptionIcon 
          image={soundOn ? require("../assets/sound-on-icon.png") : require("../assets/sound-off-icon.png")}
          //action={setSoundOn(val => !val)}
          size={width / 7.2}
        />
      </View>

      <View style={{...style.record, top: height / 100 * 93, width}}>
        <Text style={style.record.title}>RECORD</Text>
        <Text style={style.record.points}>XX</Text>
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

const style = StyleSheet.create({
  container : {
    height: "100%",
    width: "100%",

    backgroundColor: "#11001c"
  },
  points: {
    alignItems: "center",
    justifyContent: "center",

    text: {
      fontSize: 70,
      color: "white",
      fontWeight: "bold"
    }
  },

  game: {
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
  },

  options: {
    position: "absolute", 
                    
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "row"
  }
})


const pads = [
  {
    position: "top-right",
    sound: G,
    color: "blue"
  },
  {
    position: "top-left",
    sound: A,
    color: "red"
  },
  {
    position: "bottom-right",
    sound: B,
    color: "green"
  },
  {
    position: "bottom-left",
    sound: C,
    color: "yellow"
  },
  {
    position: "circle",
    sound: D,
    color: "purple"
  }
]
