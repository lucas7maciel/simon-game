import { useState, useEffect, useRef } from "react"
import { StyleSheet, Text, View, Dimensions, Image, Pressable } from "react-native"
import { Restart } from "../components/restart"
import PadComponent from "../components/pads";
import G from "../sounds/g_note.mp3"
import A from "../sounds/a_note.mp3"
import B from "../sounds/b_note.mp3"
import C from "../sounds/c_note.mp3"
import D from "../sounds/d_note.mp3"

export const Game = () => {
  const {width, height} = Dimensions.get('window')
  const gameHeight = height / 100 * 45

  const [sequence, setSequence] = useState([])
  const [yourSequence, setYourSequence] = useState([])
  const [restart, setRestart] = useState(false)

  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const refs = [ref1,ref2,ref3,ref4,ref5]

  const sounds = [G, A, B, C, D]

  function addRound() {
    const newNumber = Math.floor(Math.random() * 5)

    setSequence(seq => {
      let newSeq = [...seq, newNumber]

      console.log("New Sequence")
      console.log(newSeq)

      newSeq.forEach((el, index) => {
        setTimeout(() => {
          refs[el].current.pressAnimation()
          console.log(`Pressionando ${el}`)
        }, 800 * ++index)
      })

      return newSeq
    })

    
  }

  function playRound(number) {

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

      <View style={{...style.pointsContainer, top: height / 100 * 6, height: height / 5}}>
        <Text style={style.points}>{sequence.length}</Text>
      </View>

      <View style={{...style.gameContainer, top: height / 100 * 8, height: height / 100 * 45}}>
        <PadComponent
          position={"top-right"}
          height={gameHeight} width={width}
          setSequence={() => playRound(0)}
          ref={ref1}
          sound={sounds[0]}
          color="blue"
        />

        <PadComponent 
          position={"top-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(1)}
          ref={ref2}
          sound={sounds[1]}
          color="red"
        />

        <PadComponent
          position={"bottom-right"}
          height={gameHeight} width={width}
          setSequence={() => playRound(2)}
          ref={ref3}
          sound={sounds[2]}
          color="green"
        />
        
        <PadComponent
          position={"bottom-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(3)}
          ref={ref4}
          sound={sounds[3]}
          color="yellow"
        />
        
        <PadComponent
          position={"circle"}
          height={gameHeight} width={width}
          setSequence={() => playRound(4)}
          ref={ref5}
          sound={sounds[4]}
          color={"purple"}
        />

      </View>
        
      <View style={{position: "absolute", top: height / 100 * 78, left: (width / 2) - (width / 2.4), height: height / 10, width: width / 1.2,
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
        <View style={{flex: 1, alignItems: "center"}}>
          <Pressable 
            onPress={() => console.log("Mim dê o cuzinho")}
            style={{backgroundColor: "white", width: 50, height: 50, borderRadius: 50, borderWidth: 2, alignItems: "center", justifyContent: "center"}}
          >
            <Image 
              style={{height: "70%", width: "70%", objectFit: "cover"}}
              source={require("../assets/ranking-icon.png")}
            />
          </Pressable>
        </View>

        <View style={{flex: 1, alignItems: "center"}}>
          <Pressable 
            onPress={() => console.log("Mim dê o cuzinho")}
            style={{backgroundColor: "white", width: 50, height: 50, borderRadius: 50, borderWidth: 2, alignItems: "center", justifyContent: "center"}}
          >
            <Image 
              style={{height: "70%", width: "70%", objectFit: "cover"}}
              source={require("../assets/restart-icon.png")}
            />
          </Pressable>
        </View>

        <View style={{flex: 1, alignItems: "center"}}>
          <Pressable 
            onPress={() => console.log("Mim dê o cuzinho")}
            style={{backgroundColor: "white", width: 50, height: 50, borderRadius: 50, borderWidth: 2, alignItems: "center", justifyContent: "center"}}
          >
            <Image 
              style={{height: "90%", width: "90%", objectFit: "cover"}}
              source={require("../assets/sound-on-icon.png")}
            />
          </Pressable>
        </View>
      </View>

      <View style={{...style.record, top: height / 100 * 93, width}}>
        <Text style={style.record.title}>RECORD</Text>
        <Text style={style.record.points}>XX</Text>
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

