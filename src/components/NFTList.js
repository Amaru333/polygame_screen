import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';

export default function NFTList() {
  return (
    <SafeAreaView style={styles.featuredNft}>
      <View style={styles.featuredNftContainer}>
        <View>
          <Image source={require('../assets/NFTImage.png')} />
        </View>
        <View style={styles.featuredNFTView}>
          <Image source={require('../assets/streamer.png')} />
          <Text style={styles.streamerCategory}>By streamer</Text>
        </View>
        <View style={styles.streamerNameRow}>
          <Text style={styles.streamerName}>MekaVerse</Text>
          <Text style={styles.currentPriceTag}>Current Price</Text>
        </View>
        <View style={styles.streamerNameRow}>
          <Text style={styles.streamerTag}>Meka#3139</Text>
          <View style={styles.price}>
            <Image source={require('../assets/token_logo.png')} />
            <Text style={styles.priceValue}>4410</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.placeBidButton}>Place Bid</Text>
          <Text style={styles.buyNowButton}>Buy Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  featuredNft: {
    backgroundColor: '#1A2028',
  },
  streamerCategory: {
    fontSize: 10,
    fontWeight: '300',
    color: '#FFFFFF',
    marginLeft: 5,
  },
  featuredNFTView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 20,
  },
  streamerNameRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  streamerName: {
    fontSize: 16,
    color: '#8E8EA9',
    fontWeight: '600',
  },
  currentPriceTag: {
    color: '#848484',
    fontSize: 15,
  },
  streamerTag: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 19,
  },
  featuredNftContainer: {
    backgroundColor: '#13171D',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceValue: {
    fontSize: 19,
    color: '#DCF587',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textFormat: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  placeBidButton: {
    fontSize: 17,
    fontWeight: '600',
    color: '#212134',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#C6FF00',
    borderRadius: 8,
  },
  buyNowButton: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#F2994A',
    borderRadius: 8,
  },
});
