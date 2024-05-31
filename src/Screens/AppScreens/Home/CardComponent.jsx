import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../Components/Responsive'
import Color from '../../../Theme/Color'

const CardComponent = ({image,number,title,color}) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageBackground}>
        <Image source={image} resizeMode='contain' style={styles.imageStyle}/>
      </View>
      <View style={styles.numberHolder}>
      <Text style={[styles.text,{color:color}]}>{number}</Text>
      </View>
      <View style={{}}>
      <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    main:{
        borderWidth:responsive(1),
        borderColor:Color.LightGrey,
        width:'30%',
        padding:responsive(10),
        borderRadius:responsive(5),
        alignItems:'center'
    },
    imageBackground:{
        backgroundColor:Color.cardImageBackground,
        padding:responsive(10),
        borderRadius:responsive(30)
    },
    imageStyle:{
        height:responsive(40),
        width:responsive(40)
    },
    numberHolder:{
        marginVertical:responsive(5),
        alignItems:'center'
    },
    text:{
        fontSize:responsive(19),
        fontFamily:'Lato-Bold',
        fontWeight:'700',
        color:Color.Black
    }
})