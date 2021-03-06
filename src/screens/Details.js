import { View,ScrollView,Image,Linking, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Text from '../components/text/text'
import { colors } from '../theme'
import PlanetHeader from '../components/planet-header'
import { spacing } from './../theme/spacing';

const PlanetSection = ({title,value}) => {
  return(
    <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between',paddingHorizontal: spacing[5],borderWidth:1,borderColor:colors.grey,flex:1,marginHorizontal:spacing[5],marginBottom:spacing[4]}}>
         <Text preset='small' style={{ textTransform:'uppercase'}}>{title}</Text>
        <Text preset='h2'>{value}</Text>
    </View>
  )
}

export default function Details( {route,navigation }) {
  const{planet}=route.params;
  const { surfaceImage, name, description, wikiLink, rotationTime ,revolutionTime,radius,avgTemp} = planet;
  return (
    <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        <View style={{padding: spacing[5],alignItems:'center',justifyContent:'center'}}>
          <Image source={surfaceImage} style={{ alignSelf: "center", height: 250 }} resizeMode="contain" />
         
         <View style={{marginTop:spacing[8]}}>
            <Text preset='h1' style={{textAlign:'center',textTransform:'uppercase'}} >
            {name}
            </Text>

            <Text style={{marginTop:spacing[5], textAlign:'center',paddingHorizontal: spacing[4],lineHeight:spacing[5]}}>
            {description}
            </Text>
          </View>

           <View style={{ flexDirection:'row',marginTop:spacing[8]}}>
          <Text>Source: </Text>
          <Pressable onPress={() => { navigation.navigate("Web",{url:wikiLink})}} >
              <Text style={{ textDecorationLine:'underline'}}>Wikipedia</Text>
          </Pressable>
           </View>

        </View>

        <PlanetSection title={"Rotation Time"} value={rotationTime}/>
        <PlanetSection title={"Revolution Time"} value={rotationTime}/>
        <PlanetSection title={"Radius"} value={radius}/>
        <PlanetSection title={"AVERAGE TEMP"} value={avgTemp}/>


      </ScrollView>
    </SafeAreaView>
  );
}