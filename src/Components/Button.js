import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsive } from './Responsive'
import Color from '../Theme/Color'
const Button = ({title,handleAction}) => {
  return (
    <TouchableOpacity onPress={() => handleAction()} style={styles.main} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    main:{
        borderWidth:2,
        borderColor:Color.Primary,
        marginVertical:responsive(10),
        backgroundColor:Color.Primary,
        alignItems:'center',
        padding:responsive(15),
        borderRadius:responsive(10)
        // alignSelf:'center'
    },
    text:{
        color:Color.White,
        fontSize:responsive(18),
        fontFamily:'OpenSans-600'
    }
})