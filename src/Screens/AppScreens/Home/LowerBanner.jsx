import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {responsive} from '../../../Components/Responsive';
import Color from '../../../Theme/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LowerBanner = () => {
  const bannerData = [
    {
      heading: 'CEBI Updates',
      subHeading: '!! Investors are advised to mention Mobile ...',
    },
    {
      heading: 'CEBI Updates2',
      subHeading: '!! Investors are advised to mention Mobile2 ...',
    },
    {
      heading: 'CEBI Updates3',
      subHeading: '!! Investors are advised to mention Mobile3...',
    },
    {
      heading: 'CEBI Updates4',
      subHeading: '!! Investors are advised to mention Mobile4 ...',
    },
    {
      heading: 'CEBI Updates5',
      subHeading: '!! Investors are advised to mention Mobile5...',
    },
    {
      heading: 'CEBI Updates6',
      subHeading: '!! Investors are advised to mention Mobile6...',
    },
  ];const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    } else if (direction === 'left') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
      );
    }
  };

  const currentBanner = bannerData[currentIndex];

  return (
    <View style={styles.main}>
      <View style={styles.UpperView}>
        <View style={[styles.UpperView, { justifyContent: 'none', gap: 10, width: '50%' }]}>
          <FontAwesome name="bullhorn" size={responsive(30)} color={Color.Primary} />
          <Text style={styles.text}>{currentBanner.heading}</Text>
        </View>
        <View style={[styles.UpperView, { justifyContent: 'none', gap: 10, width: '30%' }]}>
          <FontAwesome
            name="play-circle"
            size={responsive(30)}
            color={Color.Primary}
          />
          <AntDesign
            name="arrowright"
            size={responsive(30)}
            color={Color.Primary}
            onPress={() => handleArrowClick('right')}
          />
          <AntDesign
            name="arrowleft"
            size={responsive(30)}
            color={Color.Primary}
            onPress={() => handleArrowClick('left')}
          />
        </View>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.text}>{currentBanner.subHeading}</Text>
      </View>
    </View>
  );
};

export default LowerBanner;

const styles = StyleSheet.create({
  main: {
    borderWidth: responsive(2),
    width: '90%',
    alignSelf: 'center',
    borderRadius: responsive(10),
    padding: responsive(10),
    borderColor: Color.Primary,
    backgroundColor:Color.White
  },
  UpperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsive(18),
    color: Color.Primary,
    fontFamily: 'OpenSans-600',
  },
  textHolder: {
    marginVertical: responsive(10),
    alignItems: 'center',
  },
});