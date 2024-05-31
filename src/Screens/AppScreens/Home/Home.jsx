import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Color from '../../../Theme/Color';
import {responsive} from '../../../Components/Responsive';
import HomeHeader from './HomeHeader';
import ComplaintCard from './ComplaintCard';
import MultiOptionCardHolder from './MultiOptionCardHolder';
import LowerBanner from './LowerBanner';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.safeAreaView} />
      <StatusBar backgroundColor={Color.Primary} barStyle={'dark-content'} />
      <View style={styles.main}>
        {/* Header */}
        <HomeHeader />
        <ComplaintCard />
        <ScrollView>
          <MultiOptionCardHolder />
          <LowerBanner />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Color.Primary,
  },
  main: {
    flex: 1,
    // backgroundColor: Color.Primary,
  },
});
