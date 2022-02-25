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

export default function HistoryComponent() {
  return (
    <SafeAreaView>
      <View style={styles.historyComponentContainer}>
        <View style={styles.graphContainer}>
          <Text style={styles.status}>BUY</Text>
          <Image source={require('../assets/indicator.png')} />
        </View>
        <View style={styles.detailContainer}>
          <View style={[styles.priceDetails, styles.firstLine]}>
            <Text style={styles.firstText}>Dft/PGEM</Text>
            <Text style={styles.secondText}>20 Apr 9:32am</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.secondText}>Price</Text>
            <Text style={styles.firstText}>$50.00 PGEM</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.secondText}>Amount</Text>
            <Text style={styles.firstText}>$05.00 Dft</Text>
          </View>
          <View style={styles.priceDetails}>
            <Text style={styles.secondText}>Liquidity Provider Fee</Text>
            <Text style={styles.firstText}>$05.00 PGEM</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  historyComponentContainer: {
    backgroundColor: '#13171D',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  status: {
    color: '#27AE60',
    fontSize: 10,
    fontWeight: '700',
  },
  priceDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstLine: {
    marginBottom: 10,
  },
  firstText: {
    fontWeight: '400',
    fontSize: 10,
    color: 'white',
  },
  secondText: {
    fontWeight: '300',
    fontSize: 10,
    color: 'white',
  },
  detailContainer: {
    width: '70%',
  },
});
