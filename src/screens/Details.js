import { View,ScrollView,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Text from '../components/text/text'
import { colors } from '../theme'
import PlanetHeader from '../components/planet-header'
import { spacing } from './../theme/spacing';

export default function Details( {route }) {
  const{planet}=route.params;
  const {surfaceImage,name,description}=planet
  return (
    <SafeAreaView style={{backgroundColor: colors.black,flex:1}}>
      <PlanetHeader backButton={true}/>
      <ScrollView>

        <View >
          <Image source={surfaceImage} style={{alignSelf:'center'}}/>
        </View>

        <View >
          <Text >
            {name}
          </Text>
          <Text >
            {description}
          </Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}