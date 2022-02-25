import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Svg, {SvgUri} from 'react-native-svg';

export default function BottomNavigationTab() {
  return (
    <SafeAreaView>
      {/* <View style={styles.bottomNavigationTab}> */}
      <View style={styles.bottomNavigationTabContainer}>
        <View>
          <View style={styles.navigationTabs}>
            <Image source={require('../assets/Home_icon.png')} />
            <Text style={styles.textColor}>Stream</Text>
          </View>
        </View>
        <View>
          <View style={styles.navigationTabs}>
            <Image source={require('../assets/Ticket_star_icon.png')} />
            <Text style={styles.textColor}>NFT</Text>
          </View>
        </View>
        <View>
          <View style={styles.navigationTabs}>
            <Image source={require('../assets/Wallet_icon.png')} />
            <Text style={styles.textColor}>Exchange</Text>
          </View>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  navigationTabs: {
    alignItems: 'center',
  },
  textColor: {
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  //   bottomNavigationTab: {},
  bottomNavigationTabContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#13171D',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
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
