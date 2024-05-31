import React from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Home from '../../Screens/AppScreens/Home/Home';
import AboutSebi from '../../Screens/AppScreens/AboutSebi/AboutSebi';
import ContactSebi from '../../Screens/AppScreens/ContactSebi/ContactSebi';
import ProfileSetting from '../../Screens/AppScreens/ProfileSetting/ProfileSetting';
import FAQs from '../../Screens/AppScreens/FAQs/FAQs';
import ChangePassword from '../../Screens/AppScreens/ChangePassword/ChangePassword';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {responsive} from '../../Components/Responsive';
import Color from '../../Theme/Color';
import ImagePath from '../../Constant/ImagePath';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import translations from '../../Constant/String';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  changeLanguage,
  login,
  logout,
  saveData,
} from '../../Redux/Action/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerTab = createDrawerNavigator();

const CustomDrawerContent = props => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChangeLanguage = () => {
    Alert.alert(
      `${string.changeLanguage}`,
      `${string.confirmationLanguageChange}`,
      [
        {
          text: `${string.cancel}`,
          style: 'cancel',
        },
        {
          text: `${string.hindi}`,
          onPress: () => dispatch(changeLanguage('hi')), // Handle the logout logic here
        },
        {
          text: `${string.english}`,
          onPress: () => dispatch(changeLanguage('en')), // Handle the logout logic here
        },
      ],
      {cancelable: false},
    );
  };
  const handleLogout = () => {
    Alert.alert(
      `${string.Logout}`,
      `${string.confirmation}`,
      [
        {
          text: `${string.cancel}`,
          style: 'cancel',
        },
        {
          text: `${string.ok}`,
          onPress: async () => {
            await AsyncStorage.removeItem('isLoggedIn');
            dispatch(login('No'));
            dispatch(saveData('No'));
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.drawerContent}>
      <View style={styles.profileSection}>
        <Image
          source={ImagePath.profile} // Replace with user's profile image URI
          style={styles.profileImage}
        />
        <View style={{width: '70%'}}>
          <Text style={styles.profileName}>Ashish Ranjan</Text>
          <Text style={styles.profileEmail}>ashish.ranjan@velocis.co.in</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="closecircle"
            size={responsive(20)}
            color={Color.Primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.descriptionBox}>
        <View>
          <Text style={styles.descriptionText}>
            {string.lastSuccessfulLogin}
          </Text>
          <Text
            style={[
              styles.descriptionText,
              {fontFamily: 'OpenSans-600', marginTop: 5},
            ]}>
            2023-08-18 12:26:56.844
          </Text>
        </View>
        <View>
          <Text style={styles.descriptionText}>
            {string.lastUnSuccessfulLogin}
          </Text>
          <Text
            style={[
              styles.descriptionText,
              {fontFamily: 'OpenSans-600', marginTop: 5},
            ]}>
            2023-08-18 12:26:56.844
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonHolder}>
          <Text style={styles.text}>{`${string.loginUse} ${'>>'}`}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleChangeLanguage}>
        <Entypo name="language" size={responsive(24)} color={Color.Black} />
        <Text style={styles.logoutButtonText}>{string.changeLanguage}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons
          name="logout"
          size={responsive(24)}
          color={Color.Black}
        />
        <Text style={styles.logoutButtonText}>{string.Logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Drawer = () => {
  const language = useSelector(state => state.language);
  const mode = useSelector(state => state.mode);
  const string = translations[language];
  return (
    <DrawerTab.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerTab.Screen
        name={`${string.home}`}
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <AntDesign name="home" size={responsive(24)} color={Color.Black} />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <DrawerTab.Screen
        name={`${string.aboutSEBI}`}
        component={AboutSebi}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <AntDesign
              name="infocirlceo"
              size={responsive(24)}
              color={Color.Black}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <DrawerTab.Screen
        name={`${string.changePassword}`}
        component={ChangePassword}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <Ionicons
              name="lock-closed-outline"
              size={responsive(24)}
              color={Color.Black}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <DrawerTab.Screen
        name={`${string.FAQs}`}
        component={FAQs}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <AntDesign
              name="questioncircleo"
              size={responsive(24)}
              color={Color.Black}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <DrawerTab.Screen
        name={`${string.profileSetting}`}
        component={ProfileSetting}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <Feather name="user" size={responsive(24)} color={Color.Black} />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <DrawerTab.Screen
        name={`${string.contactSEBI}`}
        component={ContactSebi}
        options={{
          headerShown: true,
          drawerIcon: ({color}) => (
            <Ionicons
              name="call-outline"
              size={responsive(24)}
              color={Color.Black}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
    </DrawerTab.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  profileSection: {
    height: responsive(125),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: responsive(20),
    backgroundColor: Color.White,
    gap: 20,
  },
  profileImage: {
    width: responsive(50),
    height: responsive(50),
    borderRadius: responsive(25),
  },
  profileName: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-600',
    color: Color.Black,
  },
  profileEmail: {
    width: '100%',
    fontSize: responsive(14),
    fontFamily: 'OpenSans-600',
    color: Color.Black,
  },
  drawerList: {
    flex: 1,
  },
  descriptionBox: {
    borderWidth: 2,
    height: responsive(200),
    padding: 20,
    width: '90%',
    borderRadius: responsive(10),
    borderStyle: 'dotted',
    borderColor: Color.Primary,
    alignSelf: 'center',
    marginBottom: responsive(20),
    backgroundColor: Color.descriptionBox,
    gap: responsive(15),
  },
  descriptionText: {
    fontSize: responsive(14),
    fontFamily: 'OpenSans-Regular',
    color: Color.Black,
  },
  logoutButton: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: responsive(20),
  },
  logoutButtonText: {
    fontSize: responsive(16),
    fontFamily: 'OpenSans-600',
    color: Color.Black,
  },
  labelStyle: {
    color: Color.Black,
    fontFamily: 'OpenSans-600',
    fontSize: responsive(16),
  },
  divider: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderColor: Color.Grey,
    marginVertical: responsive(5),
  },
  buttonHolder: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Color.Primary,
    backgroundColor: Color.White,
  },
  text: {
    fontSize: responsive(16),
    color: Color.Primary,
    fontFamily: 'OpenSans-600',
    textAlign: 'center',
  },
});

export default Drawer;
