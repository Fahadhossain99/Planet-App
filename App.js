import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { colors, spacing } from './src/theme';
import { useFonts } from "expo-font";
import Text from './src/components/text/text';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/Home';
import Details from './src/screens/Details';


const Stack = createNativeStackNavigator();



export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator/>
  }
  else{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
       </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
