import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

export default function SwapModal() {
  return (
    <SafeAreaView>
      <View style={styles.modalContainer}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText}>Confirm swap</Text>
          <Image source={require('../assets/close_square.png')} />
        </View>

        <View style={styles.confirmationTextContainer}>
          <View style={styles.swapBar}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.priceText}>0.2345</Text>
            <Text style={styles.nameText}>Drax Fantoken</Text>
          </View>
          <View style={styles.swapBar}>
            <Image source={require('../assets/down_pointed_arrow.png')} />
          </View>
          <View style={styles.swapBar}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.priceText}>0.2345</Text>

            <Text style={styles.nameText}>PGEM Coins </Text>
          </View>
          <View>
            <Text style={styles.outputEstimation}>
              Output is estimated. You will receive at least 0.0508688 ETH or
              the transaction will revert.
            </Text>
          </View>
        </View>
        <View style={styles.confirmationTextContainer}>
          <View style={styles.balanceContainer}>
            <View style={styles.balanceInnerElements}>
              <Text style={styles.textTitle}>Price</Text>
              <View style={styles.balanceInnerElements}>
                <Text style={styles.textBalance}>$50.00 Dft / PGEM </Text>
                <Image source={require('../assets/spinning.png')} />
              </View>
            </View>
            <View style={styles.balanceInnerElements}>
              <View style={styles.balanceInnerElements}>
                <Text style={styles.textTitle}>Minimum received </Text>
                <Image source={require('../assets/know_more.png')} />
              </View>
              <Text style={styles.textBalance}>$05.00 Dft</Text>
            </View>
            <View style={styles.balanceInnerElements}>
              <View style={styles.balanceInnerElements}>
                <Text style={styles.textTitle}>Price impact </Text>
                <Image source={require('../assets/know_more.png')} />
              </View>
              <Text style={styles.textBalance}>{`<0.01%`}</Text>
            </View>
            <View style={styles.balanceInnerElements}>
              <View style={styles.balanceInnerElements}>
                <Text style={styles.textTitle}>Liquidity Provider Fee </Text>
                <Image source={require('../assets/know_more.png')} />
              </View>
              <Text style={styles.textBalance}>$05.00 PGEM</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.payUsingContainer}>
              <Text style={styles.price}>CONFIRM SWAP</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#13171D',
    borderRadius: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  outputEstimation: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  swapBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 40,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  nameText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
  },
  titleText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  walletText: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
    marginTop: 15,
    color: '#ffffff',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  nftHighlight: {
    color: '#C6FF00',
    fontWeight: '700',
  },
  confirmationTextContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C6FF00',
  },
  balanceContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C6FF00',
    alignItems: 'center',
  },
  balanceInnerElements: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '300',
  },
  textBalance: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
  },
  payUsingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    borderRadius: 3,
  },
  payUsingText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '400',
    marginHorizontal: 10,
  },
  currencyName: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '400',
    marginTop: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#C6FF00',
    borderRadius: 8,
    width: '100%',
  },
  price: {
    color: '#212134',
    fontWeight: '500',
    fontSize: 13,
    padding: 10,
    paddingLeft: '33%',
  },
  total: {
    color: '#212134',
    fontWeight: '300',
    fontSize: 13,
  },
});
