import React from 'react'
import { Text } from 'react-native'

export default function RegularText({text,textStyle}) {
  return <Text style={[{
    // fontFamily:'SF UI Display'
  },textStyle]}>{text}</Text>
}