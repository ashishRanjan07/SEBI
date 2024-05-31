import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/AppScreens/Home/Home';
import Menu from '../../Screens/AppScreens/Menu/Menu';
import {useNavigation} from '@react-navigation/native';
import Drawer from '../DrawerNavigation/Drawer';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="menu"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
