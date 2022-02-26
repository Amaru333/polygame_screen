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
  TextInput,
} from 'react-native';

export default function ExchangeComponent() {
  return (
    <SafeAreaView>
      <View>
        <View
          style={[
            styles.exchangeComponentContainer,
            styles.exchangeComponentFirstTab,
          ]}>
          <View style={styles.exchangeComponentFirstTabImage}>
            <View>
              <Image source={require('../assets/coin_exchange_1.png')} />
              <Image
                style={styles.secondImage}
                source={require('../assets/coin_exchange_2.png')}
              />
            </View>
            <Text style={styles.pairType}>Drax/PGEM</Text>
          </View>
          <View style={styles.hoursChange}>
            <Text style={styles.hoursChangeText}>-15%</Text>
          </View>
          <View style={styles.lastPrice}>
            <Text style={styles.whiteText}>200 PGEM</Text>
            <Image source={require('../assets/drop_down_arrow.png')} />
          </View>
        </View>
        <View style={[styles.exchangeComponentContainer, styles.secondTab]}>
          <View style={styles.profileContainer}>
            <View style={styles.secondTab}>
              <Image
                style={styles.profileImage}
                source={require('../assets/streamer_profile_pic.png')}
              />
              <View>
                <Image
                  style={styles.viewersImage}
                  source={require('../assets/3_friends.png')}
                />
                <Text style={styles.viewerCount}>10K</Text>
              </View>
            </View>
            <View style={styles.streamerTitleContainer}>
              <Image source={require('../assets/streamer.png')} />
              <Text style={styles.streamerTitle}>By streamer</Text>
            </View>
            <Text style={styles.streamerName}>MekaVerse</Text>
          </View>
          <View style={styles.secondRowContainer}>
            <View>
              <Text style={styles.firstLineText}>10M</Text>
              <Text style={styles.secondLineText}>By streamer</Text>
            </View>
            <View>
              <Text style={styles.firstLineText}>100k</Text>
              <Text style={styles.secondLineText}>PGEM liquidity</Text>
            </View>
          </View>
          <View style={styles.thirdRowContainer}>
            <Text style={styles.buyNowButton}>Buy Now</Text>
            <Text style={styles.sellButton}>Sell Now</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
  },
  buyNowButton: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    color: '#ffffff',
    backgroundColor: '#F2994A',
    borderRadius: 8,
    fontWeight: '600',
  },
  sellButton: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    color: '#212134',
    backgroundColor: '#C6FF00',
    borderRadius: 8,
    fontWeight: '600',
    marginTop: 10,
  },
  firstLineText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  secondLineText: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ffffff',
    marginBottom: 5,
  },
  thirdRowContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
  },
  secondRowContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  streamerName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#8E8EA9',
  },
  streamerTitle: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ffffff',
    marginLeft: 5,
  },
  streamerTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  viewerCount: {
    fontSize: 9,
    color: '#8E8EA9',
  },
  viewersImage: {
    marginTop: 10,
  },
  profileImage: {
    marginRight: 10,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    width: '30%',
  },
  secondTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 10,
  },
  lastPrice: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hoursChange: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hoursChangeText: {
    color: '#EB5757',
    fontSize: 13,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#EB5757',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  pairType: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginLeft: 30,
    marginTop: 5,
  },
  exchangeComponentContainer: {
    backgroundColor: '#13171D',
    marginBottom: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  exchangeComponentFirstTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  exchangeComponentFirstTabImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  },
  secondImage: {
    position: 'absolute',
    marginLeft: 20,
  },
});
