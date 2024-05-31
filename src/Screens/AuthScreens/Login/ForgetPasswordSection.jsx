import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../Components/Responsive'
import Color from '../../../Theme/Color'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import translations from '../../../Constant/String';
const ForgetPasswordSection = () => {
    const navigation = useNavigation();
    const language = useSelector(state => state.language);
  const strings = translations[language];
  const mode = useSelector(state => state.mode);
  return (
    <TouchableOpacity style={styles.main} onPress={() => navigation.push('Forget Password')}>
      <Text style={styles.text}>{strings.fPassword}</Text>
    </TouchableOpacity>
  )
}

export default ForgetPasswordSection

const styles = StyleSheet.create({
    main:{
        alignItems:'center',
        marginTop:responsive(5),
        marginBottom:responsive(20)
    },
    text:{
        fontSize:responsive(16),
        color:Color.Primary,
        fontFamily:'OpenSans-600'
    }
})