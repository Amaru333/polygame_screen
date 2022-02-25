import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import NFTList from './NFTList';

let ScreenHeight = Dimensions.get('window').height;

export default function Statistics() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.statisticPageContainer}>
          <View>
            <Text style={styles.statisticsTitle}>Statistics</Text>
          </View>
          <View style={styles.tabView}>
            <View style={styles.inactiveTabContainer}>
              <Text style={styles.inactiveTab}>Streams</Text>
            </View>
            <View style={styles.activeTabContainer}>
              <Text style={styles.activeTab}>My NFT</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <View style={styles.statsLine1}>
              <Text style={styles.weeklyEarningTitle}>THIS WEEK EARNINGS</Text>
              <Image source={require('../assets/upward_icon.png')} />
            </View>
            <View style={styles.statsLine1}>
              <Text style={styles.amount}>$240.00</Text>
              <Image source={require('../assets/stats.png')} />
            </View>
          </View>

          <View style={styles.stats2}>
            <View style={styles.stats2EachLine}>
              <View style={styles.width33}>
                <Text style={styles.line1}>Highest Sale</Text>
                <Text>--</Text>
              </View>
              <View style={styles.width33}>
                <Text style={styles.line1}>Floor Price</Text>
                <Text style={styles.line2}>$814</Text>
              </View>
              <View style={styles.width33}>
                <Text style={styles.line1}>Market Cap</Text>
                <Text style={styles.line2}>--</Text>
              </View>
            </View>
            <View style={styles.stats2EachLine}>
              <View style={styles.width33}>
                <Text style={styles.line1}>Items</Text>
                <Text style={styles.line2}>--</Text>
              </View>
              <View style={styles.width33}>
                <Text style={styles.line1}>Owners</Text>
                <Text style={styles.line2}>814</Text>
              </View>
              <View style={styles.width33}>
                <Text style={styles.line1}>Total Volume</Text>
                <Text style={styles.line2}>$814</Text>
              </View>
            </View>
          </View>

          <View style={styles.allNFTTab}>
            <Text style={styles.allNFTTitle}>All NFT</Text>
            <Text style={styles.viewAllTitle}>View all</Text>
          </View>

          <View>
            <ScrollView horizontal={true}>
              <View style={styles.featuredNfts}>
                <NFTList />
              </View>
              <View style={styles.featuredNfts}>
                <NFTList />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  featuredNfts: {
    alignItems: 'center',
    margin: 20,
  },
  addNFT: {
    width: 30,
    height: 30,
    position: 'sticky',
    backgroundColor: '#C6FF00',
    bottom: 20,
    right: 10,
  },
  allNFTTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#ffffff',
  },
  viewAllTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#848484',
  },
  allNFTTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  line1: {
    color: '#EEFAC3',
    fontSize: 13,
    fontWeight: '500',
  },
  line2: {
    color: '#EEFAC3',
    fontSize: 15,
    fontWeight: '700',
  },
  width33: {
    width: '33%',
    alignItems: 'center',
  },
  stats2EachLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  stats2: {
    backgroundColor: '#212134',
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginHorizontal: 20,
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  stats: {
    backgroundColor: '#C6FF00',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  statsLine1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingRight: 15,
  },
  weeklyEarningTitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#212134',
  },
  amount: {
    fontWeight: '700',
    fontSize: 35,
    color: '#212134',
  },
  statisticPageContainer: {
    backgroundColor: '#1A2028',
    minHeight: ScreenHeight,
    padding: 10,
  },
  statisticsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#C6FF00',
    padding: 20,
  },
  tabView: {
    backgroundColor: '#212134',
    borderRadius: 100,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  inactiveTab: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },
  activeTab: {
    color: '#212134',
    fontSize: 19,
    fontWeight: '700',
  },
  inactiveTabContainer: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  activeTabContainer: {
    backgroundColor: '#C6FF00',
    width: '50%',
    alignItems: 'center',
    height: 50,
    borderRadius: 100,
    padding: 10,
  },
});
