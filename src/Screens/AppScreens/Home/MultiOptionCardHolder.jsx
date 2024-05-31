import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsive} from '../../../Components/Responsive';
import Color from '../../../Theme/Color';
import Card from './Card';
import ImagePath from '../../../Constant/ImagePath';
import { useSelector } from 'react-redux';
import translations from '../../../Constant/String';


const MultiOptionCardHolder = () => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  const cardData = [
    {image: ImagePath.one, title: `${string.c1}`, color: Color.c1},
    {image: ImagePath.two, title: `${string.c2}`, color: Color.c2},
    {image: ImagePath.three, title: `${string.c3}`, color: Color.c3},
    {image: ImagePath.four, title: `${string.c4}`, color: Color.c4},
    {image: ImagePath.five, title:`${string.c5}`, color: Color.c5},
    {image: ImagePath.six, title: `${string.c6}`, color: Color.c6},
  ];
  return (
    <View style={styles.main}>
      <View style={styles.cardComponents}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            color={card.color}
          />
        ))}
      </View>
    </View>
  );
};

export default MultiOptionCardHolder;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    padding: responsive(10),
    borderRadius: responsive(10),
    elevation: responsive(5),
    backgroundColor: Color.White,
    borderWidth: responsive(2),
    borderColor: Color.White,
    alignSelf: 'center',
    marginBottom: responsive(20),
    flex: 0.35,
  },
  cardComponents: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
});
