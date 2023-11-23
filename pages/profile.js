import { StyleSheet, View, Text, Image } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"

export const Profile = (props) => {
  return (
    <View>
      <View style={style.navbar}>
        <Text>Back</Text>
        <Text>Log Out</Text>
      </View>

      <View style={style.profile}>
        <Image
          source={require('../assets/profile-icon.png')}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    height: hp('10%'),

    backgroundColor: 'red'
  },
  profile: {
    image: {
    }
  }
})
