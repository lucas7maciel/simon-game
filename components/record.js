import { StyleSheet, Text, View } from "react-native"

export const Record = (props) => {
  return (
    <View style={style.container}>
      <Text>Aiai</Text>
      <Text>{props.nick}</Text>
      <Text>{props.points}</Text>
      <Text>{props.city}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 2,
  }
})