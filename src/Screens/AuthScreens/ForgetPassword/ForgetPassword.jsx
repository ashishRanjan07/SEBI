import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import translations from '../../../Constant/String';
import LoginStyle from '../Login/LoginStyle';
import ImagePath from '../../../Constant/ImagePath';
import FPasswordLowerView from './FPasswordLowerView';
import {responsive} from '../../../Components/Responsive';

const ForgetPassword = () => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  const style = LoginStyle(mode);

  return (
    <SafeAreaView style={style.view}>
      <ImageBackground
        source={ImagePath.login}
        resizeMode="cover"
        style={style.view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.imageHolder}>
            <Image source={ImagePath.logo} style={style.imageStyle} />
            <Text style={style.scoreText}>{string.SCORES}</Text>
            <Text style={style.text}>हर निवेशक की ताकत</Text>
          </View>
          <View style={styles.lowerView}>
            <FPasswordLowerView />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  lowerView: {
    marginTop: responsive(350),
  },
});
