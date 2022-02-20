import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { colors, spacing } from './src/theme';
import { useFonts } from "expo-font";
import Text from './src/components/text/text';




export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text> Loading.... </Text>;
  }




  return (
    <View style={styles.container}>
      <Text preset='h1' style={{color: colors.darkOrange}}>Hello...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
