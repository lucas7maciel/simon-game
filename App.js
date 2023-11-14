import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Game } from './pages/game';

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
          name="Game" 
          component={Game} 
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

