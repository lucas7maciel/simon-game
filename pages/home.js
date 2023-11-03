
import { View, Button, Text, Image, StyleSheet } from "react-native"

export const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text>Simon Game</Text>
      <Button
        title="Play"
        onPress={() => navigation.navigate('Game')}
      />
      <Button
        title="Ranking"
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
  }
})