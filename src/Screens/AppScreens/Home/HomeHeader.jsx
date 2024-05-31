import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import translations from '../../../Constant/String';
import {responsive} from '../../../Components/Responsive';
import Color from '../../../Theme/Color';
import ImagePath from '../../../Constant/ImagePath';
const HomeHeader = () => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  return (
    <View style={{backgroundColor: Color.Primary, height:responsive(150)}}>
      <View style={styles.main}>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Image
            source={ImagePath.profile}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <View>
            <Text style={styles.text}>{string.welcome}</Text>
            <Text style={styles.nameText}>{string.ashish}</Text>
          </View>
        </View>
        <Text style={styles.scoreText}>{string.SCORES}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: Color.Primary,
    alignItems: 'center',
  },
  scoreText: {
    marginLeft: responsive(10),
    marginVertical: responsive(8),
    color: Color.White,
    textAlign: 'center',
    fontSize: responsive(24),
    fontFamily: 'OpenSans-800',
  },
  imageStyle: {
    height: responsive(60),
    width: responsive(60),
    borderRadius: responsive(25),
  },
  text: {
    fontSize: responsive(16),
    color: Color.LightGrey,
    fontFamily: 'OpenSans-600',
  },
  nameText: {
    fontSize: responsive(18),
    color: Color.White,
    fontFamily: 'OpenSans-600',
  },
});
