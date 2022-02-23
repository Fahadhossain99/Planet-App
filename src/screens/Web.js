import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview";

import PlanetHeader from '../components/planet-header';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Web({route}) {
    const {url}=route.params;
   return (
     <SafeAreaView style={{ flex: 1 }}>
     <PlanetHeader backButton={true}/>
       <WebView source={{ uri: url }} />
       <StatusBar barStyle="dark-content"/>
     </SafeAre>
   );
  
}