import { StyleSheet, Text, View } from "react-native"

export const Record = (props) => {
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text style={style.text}>{props.nick}</Text>  
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>{props.points}</Text>  
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>{props.city}</Text>  
      </View>
      <View style={style.textContainer}>
        <Text style={style.text}>{props.city}</Text>  
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',

    borderWidth: 2,
    borderRadius: 16,

    marginBottom: 10,
    backgroundColor: 'white'
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    fontSize: 15
  }
})