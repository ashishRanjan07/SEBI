import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoginStyle from './LoginStyle';
import {useDispatch, useSelector} from 'react-redux';
import translations from '../../../Constant/String';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsive} from '../../../Components/Responsive';
import Color from '../../../Theme/Color';
import Button from '../../../Components/Button';
import ForgetPasswordSection from './ForgetPasswordSection';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, saveData } from '../../../Redux/Action/Action';

const LowerForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const strings = translations[language];
  const mode = useSelector(state => state.mode);
  const style = LoginStyle(mode);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (id.length > 0) {
      setShowError(false);
      setErrorMessage('');
    }
    if (password.length > 0) {
      setErrorMessage(false);
      setErrorMessage('');
    }
  }, [id, password]);
  const handleLoginPress = async () => {
    if (id.trim() === '' && password.trim() === '') {
      setShowError(true);
      setErrorMessage('Please enter user Id and password');
      return;
    }
    if (id.trim() === '') {
      setShowError(true);
      setErrorMessage('Please enter user Id');
      return;
    }
    if (password.trim() === '') {
      setShowError(true);
      setErrorMessage('Please enter password');
      return;
    }
    if(id==='6206416452' && password==='Test@123'){
      await AsyncStorage.setItem("isLoggedIn",'Yes');
      dispatch(login('Yes'))
      dispatch(saveData('Yes'))
      navigation.replace('BottomNavigation')
    }
    else{
      setShowError(true);
      setErrorMessage('Please enter correct credentials');
      return;
    }
  };
  return (
    <View style={style.lowerViewForm}>
      <Text style={style.loginHeaderText}>{strings.login}</Text>
      <Text style={style.loginSubHeaderText}>{strings.loginSubTitle}</Text>
      {/* User Id */}
      <View style={style.inputHolder}>
        {/* Icon View */}
        <View style={style.iconHolder}>
          <Zocial name="email" size={responsive(30)} color={Color.Grey} />
        </View>
        {/* Input Holder */}
        <View style={style.inputView}>
          <Text style={style.labelText}>{strings.id}</Text>
          <TextInput
            style={style.input}
            placeholder={strings.id}
            value={id}
            onChangeText={text => setId(text)}
            placeholderTextColor={Color.Primary}
          />
        </View>
        {/* Icon Holder */}
        <TouchableOpacity style={style.iconHolder} onPress={() => setId('')}>
          <Feather name="x-circle" size={responsive(30)} color={Color.Grey} />
        </TouchableOpacity>
      </View>
      {/* Password Filed */}
      <View style={style.inputHolder}>
        {/* Icon View */}
        <View style={style.iconHolder}>
          <MaterialCommunityIcons
            name="lock"
            size={responsive(30)}
            color={Color.Grey}
          />
        </View>
        {/* Input Holder */}
        <View style={style.inputView}>
          <Text style={style.labelText}>{strings.password}</Text>
          <TextInput
            style={style.input}
            placeholder={strings.password}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholderTextColor={Color.Primary}
          />
        </View>
        {/* Icon Holder */}
        <TouchableOpacity
          style={style.iconHolder}
          onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={responsive(30)}
            color={Color.Grey}
          />
        </TouchableOpacity>
      </View>
      {showError && (
        <View style={style.errorHolder}>
          <Text style={style.errorText}>{errorMessage}</Text>
        </View>
      )}
      {/* Button */}
      <Button title={strings.signIn} handleAction={handleLoginPress} />
      {/* ForgetPassword Section */}
      <ForgetPasswordSection />
    </View>
  );
};

export default LowerForm;

const styles = StyleSheet.create({});
