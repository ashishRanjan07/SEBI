import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
