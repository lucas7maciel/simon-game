import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Game } from './pages/game';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';
import { Records } from './pages/records';
import { Profile } from './pages/profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar
      style="light"
    />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Records"
          component={Records}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Game" 
          component={Game} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

