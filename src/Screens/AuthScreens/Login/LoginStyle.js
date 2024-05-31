import {StyleSheet} from 'react-native';
import Color from '../../../Theme/Color';
import {responsive} from '../../../Components/Responsive';

const LoginStyle = mode =>
  StyleSheet.create({
    view: {
      flex: 1,
    },
    imageStyle: {
      width: responsive(132),
      height: responsive(58),
      marginTop: responsive(84),
    },
    imageHolder: {
      alignItems: 'center',
    },
    text: {
      marginLeft: -responsive(10),
      // marginTop: responsive(10),
      color: mode === 'light' ? Color.Primary : Color.White,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: responsive(18),
    },
    scoreText: {
      marginLeft: -responsive(10),
      marginVertical: responsive(8),
      color: mode === 'light' ? Color.Primary : Color.White,
      textAlign: 'center',
      fontSize: responsive(21),
      // fontWeight:'800',
      fontFamily: 'OpenSans-800',
    },
    lowerView: {
      marginTop: responsive(250),
      bottom: responsive(10),
      width: '100%',
    },
    lowerViewForm: {
      width: '90%',
      alignSelf: 'center',
      gap: 5,
    },
    loginHeaderText: {
      fontSize: responsive(24),
      color: mode === 'light' ? Color.Primary : Color.White,
      fontFamily: 'OpenSans-600',
    },
    loginSubHeaderText: {
      fontSize: responsive(16),
      color: mode === 'light' ? Color.Primary : Color.White,
      fontFamily: 'OpenSans-Regular',
    },
    inputHolder: {
      marginTop: responsive(10),
      borderWidth: 2,
      borderRadius: responsive(10),
      borderColor: Color.Grey,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconHolder: {
      width: '15%',
      alignItems: 'center',
    },
    inputView: {
      width: '65%',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    labelText: {
      marginTop: responsive(5),
      fontSize: responsive(16),
      color: mode === 'light' ? Color.Primary : Color.White,
      fontFamily: 'OpenSans-Regular',
    },
    input: {
      height: responsive(40),
      fontSize: responsive(18),
      color: mode === 'light' ? Color.Primary : Color.White,
    },
    errorHolder: {
      marginTop: responsive(5),
      alignItems: 'center',
    },
    errorText: {
      fontSize: responsive(16),
      color: Color.CrimsonRed,
      fontFamily: 'OpenSans-Regular',
    },
  });

export default LoginStyle;
