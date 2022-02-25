import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

export default function BuyNowModal() {
  return (
    <SafeAreaView>
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.titleText}>Buy now</Text>
        </View>
        <View style={styles.confirmationTextContainer}>
          <View>
            <Text style={styles.walletText}>
              <Text>You are about to purchase </Text>
              <Text style={styles.nftHighlight}>NFT NAME</Text>
              <Text> from </Text>
              <Text style={styles.nftHighlight}>NFT COLLECTION</Text>
              <Text> collection.</Text>
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <View style={styles.balanceInnerElements}>
              <Text style={styles.textTitle}>Your balance</Text>
              <Text style={styles.textBalance}>$05.00</Text>
            </View>
            <View style={styles.balanceInnerElements}>
              <Text style={styles.textTitle}>Service fee</Text>
              <Text style={styles.textBalance}>$05.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentContainer}>
          <View>
            <View style={styles.payUsingContainer}>
              <View style={styles.box}></View>
              <View>
                <Text style={styles.payUsingText}>PAY USING</Text>
              </View>
              <View>
                <Image source={require('../assets/up_arrow.png')} />
              </View>
            </View>
            <View>
              <Text style={styles.currencyName}>PGM Token</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Text style={styles.price}>$55.00</Text>
              <Text style={styles.total}>TOTAL</Text>
            </View>
            <View style={styles.payUsingContainer}>
              <Text style={styles.price}>BUY NOW </Text>
              <Image source={require('../assets/right_arrow.png')} />
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
  titleText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#C6FF00',
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
    width: '60%',
  },
  price: {
    color: '#212134',
    fontWeight: '500',
    fontSize: 13,
  },
  total: {
    color: '#212134',
    fontWeight: '300',
    fontSize: 13,
  },
});
