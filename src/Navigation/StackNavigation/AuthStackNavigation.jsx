import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Screens/AuthScreens/Login/Login';
import ForgetPassword from '../../Screens/AuthScreens/ForgetPassword/ForgetPassword';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name='BottomNavigation'
      component={BottomNavigation}
      options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
