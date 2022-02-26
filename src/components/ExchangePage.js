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
import ExchangeComponent from './ExchangeComponent';
import HistoryComponent from './HistoryComponent';

let ScreenHeight = Dimensions.get('window').height;
export default function ExchangePage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.exchangePageContainer}>
          <View>
            <View style={styles.firstHalf}>
              <View style={styles.exchangeTitleContainer}>
                <Text style={styles.exchangeTitle}>Exchange</Text>
                <Image source={require('../assets/history.png')} />
              </View>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../assets/logo.png')}
                />
                <Text style={styles.exchangeNames}>Drax Fantoken</Text>
                <Image source={require('../assets/drop_down_arrow.png')} />
              </View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Lorem"
                placeholderTextColor={'#ABABAB'}
              />
              <View style={styles.exchangeImageContainer}>
                <Image source={require('../assets/exchange_swap.png')} />
              </View>
              <View style={styles.profileContainer}>
                <Image
                  style={styles.profileImage}
                  source={require('../assets/logo.png')}
                />
                <Text style={styles.exchangeNames}>PGEM Coins</Text>
                <Image source={require('../assets/drop_down_arrow.png')} />
              </View>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Lorem"
                placeholderTextColor={'#ABABAB'}
              />
              <Text style={styles.swapButton}>SWAP</Text>
            </View>
            <View>
              <View style={styles.tableHeader}>
                <Text style={[styles.textWhite, styles.text1]}>Pair Type</Text>

                <Text style={[styles.textWhite, styles.text2]}>24hrschg%</Text>

                <Text style={[styles.textWhite, styles.text1]}>Lastprice</Text>
              </View>
            </View>
            <View style={styles.exchangeComponentContainer}>
              <View style={styles.marginBottom10}>
                <ExchangeComponent />
              </View>
              <View style={styles.marginBottom10}>
                <ExchangeComponent />
              </View>
              <View style={styles.marginBottom10}>
                <ExchangeComponent />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  exchangePageContainer: {
    backgroundColor: '#1A2028',
    minHeight: ScreenHeight,
  },
  text1: {
    width: '40%',
    textAlign: 'center',
  },
  text2: {
    width: '20%',
    textAlign: 'center',
  },
  textWhite: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 10,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCF587',
    justifyContent: 'space-around',
    margin: 10,
    marginTop: 30,
    paddingBottom: 10,
  },
  swapButton: {
    marginTop: 25,
    marginBottom: 5,
    paddingVertical: 14,
    backgroundColor: '#C6FF00',
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
    color: '#212134',
  },
  exchangeNames: {
    marginHorizontal: 10,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  exchangeImageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  exchangeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#C6FF00',
  },
  firstHalf: {
    padding: 20,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: 'rgba(238, 250, 195, 0.12)',
  },
  exchangeTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 20,
  },
  textInputStyle: {
    backgroundColor: '#13171D',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 60,
    color: '#ffffff',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  exchangeComponentContainer: {
    marginHorizontal: 10,
    // marginTop: 15,
  },
});
