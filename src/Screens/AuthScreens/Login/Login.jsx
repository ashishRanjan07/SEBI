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
import ImagePath from '../../../Constant/ImagePath';
import LoginStyle from './LoginStyle';
import translations from '../../../Constant/String';
import {useSelector} from 'react-redux';
import LowerForm from './LowerForm';

const Login = () => {
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
          <View style={style.lowerView}>
            <LowerForm />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
