import { useState, useEffect, useRef } from "react"
import { StyleSheet, Text, View, Dimensions, Animated, Button } from "react-native"
import { Restart } from "../components/restart"
import PadComponent from "../components/pads";

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

  function addRound() {
    const newNumber = Math.floor(Math.random() * 5)

    setSequence(seq => {
      const newSeq = [...seq, newNumber]

      console.log("New Sequence")
      console.log(newSeq)

      newSeq.forEach(async (el) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(`Pressionando: ${el}`)
        refs[el].current?.pressAnimation()
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

      <View style={{...style.pointsContainer, top: height / 20, height: height / 5}}>
        <Text style={style.points}>{sequence.length}</Text>
      </View>

      <View style={{...style.gameContainer, top: height / 100 * 8, height: height / 100 * 45}}>
        <PadComponent
          position={"top-right"}
          height={gameHeight} width={width}
          setSequence={() => playRound(0)}
          ref={ref1}
          color="blue"
        />

        <PadComponent 
          position={"top-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(1)}
          ref={ref2}
          color="red"
        />

        <PadComponent
          position={"bottom-right"}
          height={gameHeight} width={width}
          setSequence={() => playRound(2)}
          ref={ref3}
          color="green"
        />
        
        <PadComponent
          position={"bottom-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(3)}
          ref={ref4}
          color="yellow"
        />
        
        <PadComponent
          position={"circle"}
          height={gameHeight} width={width}
          setSequence={() => playRound(4)}
          ref={ref5}
          color={"purple"}
        />

      </View>
        <Button 
          title="A"
          onPress={() => addRound()}
        />
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

/*
<PadComponent 
          position={"top-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(1)}
          color="red"
        />

        <PadComponent
          position={"bottom-right"}
          height={gameHeight} width={width}
          setSequence={() => playRound(2)}
          color="green"
        />
        
        <PadComponent
          position={"bottom-left"}
          height={gameHeight} width={width}
          setSequence={() => playRound(3)}
          color="yellow"
        />
        
        <PadComponent
          position={"circle"}
          height={gameHeight} width={width}
          setSequence={() => playRound(4)}
          color={"purple"}
        />
*/
