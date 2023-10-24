import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = 'Screen1' component={Screen1}></Stack.Screen>
      <Stack.Screen name = 'Screen2' component={Screen2}></Stack.Screen>
      
    </Stack.Navigator>
  </NavigationContainer>
  // <Screen2/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
