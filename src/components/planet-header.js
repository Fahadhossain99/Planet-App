import { View} from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors, spacing } from '../theme'

export default function PlanetHeader() {
  return (
    <View style={{paddingLeft: spacing[6],paddingVertical: spacing[4],borderBottomWidth:0.5,borderColor:colors.white}}>
      <Text preset='h2'>
          THE PLANTS
      </Text>
    </View>
  )
}