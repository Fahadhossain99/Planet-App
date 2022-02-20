import { View, } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Text from '../components/text/text'
import { colors } from '../theme'
import PlanetHeader from '../components/planet-header'

export default function Details() {
  return (
    <SafeAreaView style={{backgroundColor: colors.black,flex:1}}>
      <PlanetHeader/>
    </SafeAreaView>
  )
}