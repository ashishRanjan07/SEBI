import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../../Theme/Color';
import {responsive} from '../../../Components/Responsive';
import {useSelector} from 'react-redux';
import translations from '../../../Constant/String';
import CardComponent from './CardComponent';
import ImagePath from '../../../Constant/ImagePath';
const ComplaintCard = () => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{string.complainTitle}</Text>
      <View style={styles.cardComponents}>
        <CardComponent
          image={ImagePath.total}
          number={'100'}
          title={string.total}
          color={Color.total}
        />
        <CardComponent
          image={ImagePath.pending}
          number={'60'}
          title={string.pending}
          color={Color.CrimsonRed}
        />
        <CardComponent
          image={ImagePath.resolved}
          number={'40'}
          title={string.resolve}
          color={Color.resolved}
        />
      </View>
    </View>
  );
};

export default ComplaintCard;

const styles = StyleSheet.create({
  main: {
    width: '90%',
    padding: responsive(10),
    borderRadius: responsive(10),
    elevation: responsive(5),
    backgroundColor: Color.White,
    borderWidth: responsive(2),
    borderColor: Color.White,
    marginTop: -responsive(60),
    alignSelf: 'center',
    marginBottom:responsive(20),
  },
  title: {
    fontSize: responsive(16),
    color: Color.textColor,
    fontFamily: 'Sora-SemiBold',
  },
  cardComponents: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsive(10),
    justifyContent:'space-evenly'
  },
});
