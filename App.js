/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomNavigationTab from './src/components/BottomNavigationTab';
import BuyNowModal from './src/components/BuyNowModal';
import ConnectWalletModal from './src/components/ConnectWalletModal';
import CreateYourNFT from './src/components/CreateYourNFT';
import FeaturedNFT from './src/components/FeaturedNFT';
import MyHistory from './src/components/MyHistory';
import NFTPage from './src/components/NFTPage';
import PlaceABid from './src/components/PlaceABidModal';
import Statistics from './src/components/Statistics';
import SwapModal from './src/components/SwapModal';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>Hello</Text>
      </ScrollView>
      <CreateYourNFT />
      {/* <Statistics /> */}
      {/* <MyHistory /> */}
      {/* <SwapModal /> */}
      {/* <PlaceABid /> */}
      {/* <BuyNowModal /> */}
      {/* <ConnectWalletModal /> */}
      {/* <NFTPage /> */}
      {/* <FeaturedNFT /> */}
      {/* <BottomNavigationTab /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
  },
  bottomNavigationTab: {
    backgroundColor: '#13171D',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
