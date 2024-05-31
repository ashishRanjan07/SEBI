import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import LoginStyle from '../Login/LoginStyle';
import translations from '../../../Constant/String';
import {useNavigation} from '@react-navigation/native';
import Color from '../../../Theme/Color';
import {responsive} from '../../../Components/Responsive';
import Button from '../../../Components/Button';
import Feather from 'react-native-vector-icons/Feather';

const FPasswordLowerView = () => {
  const language = useSelector(state => state.language);
  const strings = translations[language];
  const mode = useSelector(state => state.mode);
  const style = LoginStyle(mode);

  const navigation = useNavigation();
  const otpLength = 4;
  const [otpArray, setOtpArray] = useState(Array(otpLength).fill(''));
  const [remainingTime, setRemainingTime] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showErrorText, setShowErrorText] = useState('');

  useEffect(() => {
    if (otpArray.length === 4) {
      setShowError(false);
      setShowErrorText('');
    }
  }, [otpArray]);
  useEffect(() => {
    if (remainingTime <= 0) {
      setShowResendButton(true);
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const refArray = useRef(otpArray.map(() => React.createRef()));

  const handleOtpChange = (index, value) => {
    const otpCopy = [...otpArray];
    otpCopy[index] = value;
    setOtpArray(otpCopy);

    if (value && index < otpLength - 1) {
      refArray.current[index + 1].current.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && !otpArray[index] && index > 0) {
      refArray.current[index - 1].current.focus();
    }
  };

  const handleOtpSubmit = async () => {
    const otp = otpArray.join('');
    if (otp.trim() === '') {
      setShowError(true);
      setShowErrorText('Please enter 4 digit code !');
      return;
    }
    if (otp.length < 4) {
      setShowError(true);
      setShowErrorText('Enter exact 4 digit code!');
      return;
    }
    navigation.navigate('Login');
  };
  const renderInputs = () => {
    return otpArray.map((item, index) => (
      <TextInput
        key={index}
        style={[
          styles.otpBox,
          {borderColor: showError ? Color.CrimsonRed : Color.MediumGrey},
        ]}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={text => handleOtpChange(index, text)}
        onKeyPress={({nativeEvent}) => handleKeyPress(index, nativeEvent.key)}
        ref={refArray.current[index]}
        value={otpArray[index]}
      />
    ));
  };

  const resendOtp = async () => {
    // Alert.alert('Success', 'OTP resend Successfully');
    Alert.alert(`${strings.success}`, `${strings.successDescriptions}`);
    setRemainingTime(30);
    setShowResendButton(false);
    setShowError(false);
    setShowErrorText('');
    setOtpArray(Array(otpLength).fill(''));
    if (refArray.current[0] && refArray.current[0].current) {
      refArray.current[0].current.focus();
    }
  };
  return (
    <View style={style.lowerViewForm}>
      <Text style={style.loginHeaderText}>{strings.VCode}</Text>
      <Text style={style.loginSubHeaderText}>{strings.OTPMessage}</Text>
      <View style={styles.otpContainer}>
        {renderInputs()}
        {showResendButton ? (
          <TouchableOpacity
            onPress={resendOtp}
            style={styles.resendButtonHolder}>
            <Feather
              name="refresh-ccw"
              size={responsive(35)}
              color={Color.MediumGrey}
            />
          </TouchableOpacity>
        ) : (
          <Text style={styles.timerText}>{remainingTime} {strings.sec}</Text>
        )}
      </View>
      {showError && (
        <View style={styles.errorHolder}>
          <Text style={styles.errorText}>{showErrorText}</Text>
        </View>
      )}

      <View style={styles.buttonHolder}>
        <Button title={strings.submit} handleAction={handleOtpSubmit} />
      </View>
    </View>
  );
};

export default FPasswordLowerView;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    gap: 25,
    marginTop: responsive(10),
    alignItems: 'center',
  },
  otpBox: {
    width: responsive(50),
    height: responsive(50),
    borderWidth: responsive(2),
    textAlign: 'center',
    fontSize: responsive(18),
    color: Color.Black,
    borderRadius: responsive(5),
  },
  buttonHolder: {
    marginTop: responsive(15),
    marginBottom: responsive(25),
  },
  resendButtonHolder: {
    marginLeft: responsive(25),
  },
  timerText: {
    textAlign: 'center',
    color: Color.Primary,
    fontSize: responsive(16),
    fontFamily: 'OpenSans-600',
  },
  errorHolder: {
    marginTop: responsive(10),
  },
  errorText: {
    fontSize: responsive(16),
    color: Color.CrimsonRed,
    fontFamily: 'OpenSans-Regular',
  },
});
