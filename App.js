import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/home';
import { Game } from './pages/game';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Game" 
          component={Game} 
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

