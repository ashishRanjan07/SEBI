import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../../Theme/Color';
import {responsive} from '../../../Components/Responsive';

const Card = ({image, title, color}) => {
  return (
    <View style={styles.main}>
      <View style={[styles.imageBackground, {backgroundColor: color}]}>
        <Image source={image} resizeMode="contain" style={styles.imageStyle} />
      </View>
      <View style={styles.textHolder}>
        <Text
          style={styles.text}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    width: '30%',
    alignItems: 'center',
    borderBlockColor: Color.LightGrey,
  },
  imageBackground: {
    backgroundColor: Color.cardImageBackground,
    borderRadius: responsive(50),
    height:responsive(80),
    width:responsive(80),
    alignItems:'center',
    justifyContent:'center'
  },
  imageStyle: {
    height: responsive(50),
    width: responsive(50),
  },
  textHolder: {
    height:responsive(40),
    marginVertical: responsive(10),
    alignItems: 'center',
  },
  text:{
    textAlign: 'center',
    fontSize: responsive(14),
    color: Color.Black,
    fontFamily: 'OpenSans-600',
  }
});
