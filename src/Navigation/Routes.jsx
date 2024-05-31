import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import AuthStackNavigation from './StackNavigation/AuthStackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routes = () => {
  const isLoggedInRedux = useSelector(state => state.isLoggedIn);
  // console.log(isLoggedInRedux,"Line 10");
  const isSaveData = useSelector(state => state.saveData);
  // console.log(isSaveData,"Line 12")
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const fetchLoggedInData = async () => {
      const response = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(response);
    };
    fetchLoggedInData();
  }, [isSaveData,isLoggedIn,isLoggedInRedux]);

 

  return (
    <>{isLoggedIn === null ?<AuthStackNavigation />: <BottomNavigation /> }</>
  );
};

export default Routes;
