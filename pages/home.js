
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native"

export const Home = ({navigation}) => {
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  return (
    <View style={{...style.container, height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
      <View style={{...style.titleContainer, top: height / 100 * 15, height: height / 100 * 35, width}}>
        <Text style={style.title}>Simon.</Text>
      </View>
      
      <View style={{...style.buttonsContainer, top: height / 100 * 57, height: height / 100 * 25, width}}>
        <Pressable
          style={style.playButton}
          onPress={() => navigation.navigate('Game')}
        >
          <Text style={style.playButtonText}>Play</Text>
        </Pressable>

        <Pressable
          style={style.rankingButton}
        >
          <Text style={style.rankingButtonText}>Ranking</Text>
        </Pressable>
      </View>

      <View style={{...style.creditsContainer, top: height / 100 * 97, height: height / 20, width}}>
        <Text style={style.credits}>Made by @lucas7maciel</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "purple"
  },

  titleContainer: {
    position: "absolute",
    
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold"
  },

  buttonsContainer: {
    position: "absolute",

    alignItems: "center",
    justifyContent: "center"
  },
  playButton: {
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 40,

    backgroundColor: "white"
  },
  playButtonText: {
    fontSize: 30,
    fontWeight: "bold"
  },

  rankingButton: {
    marginTop: 10,

    paddingHorizontal: 40,
    paddingVertical: 6,
    borderRadius: 40,

    backgroundColor: "white"
  },
  rankingButtonText: {
    fontSize: 20,
    fontWeight: "bold"
  },

  creditsContainer: {
    position: "absolute",

    alignItems: "center",
    justifyContent: "center"
  },
  credits: {
    fontWeight: "bold"
  }
})