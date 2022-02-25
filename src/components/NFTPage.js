import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

export default function NFTPage() {
  return (
    <SafeAreaView style={styles.featuredNftContainer}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/NFTImage.png')}
          resizeMode="cover"
          blurRadius={20}
          imageStyle={{opacity: 0.4}}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/NFTImage.png')}
                style={styles.image}
              />
              <View style={styles.favorite}>
                <Image source={require('../assets/favorite.png')} />
              </View>
            </View>
            <View style={styles.priceTag}>
              <Text style={styles.currentPriceText}>Current Price</Text>
              <View style={styles.price}>
                <Image source={require('../assets/token_logo.png')} />
                <Text style={styles.priceValue}>4410</Text>
              </View>
            </View>
            <View style={styles.profileDetails}>
              <View style={styles.profileImageContainer}>
                <View>
                  <Image
                    source={require('../assets/streamer_profile_pic.png')}
                    style={styles.profileImage}
                  />
                </View>
                <View>
                  <View style={styles.featuredNFTView}>
                    <Image source={require('../assets/streamer.png')} />
                    <Text style={styles.streamerCategory}>By streamer</Text>
                  </View>
                  <View style={styles.streamerNameRow}>
                    <Text style={styles.streamerName}>MekaVerse</Text>
                  </View>
                  <View style={styles.streamerNameRow}>
                    <Text style={styles.streamerTag}>Meka#3139</Text>
                  </View>
                  <View style={styles.streamerNameRow}>
                    <View style={styles.salePriceContainer}>
                      <Text style={styles.saleText}>On sale for </Text>
                      <Text style={styles.priceNameValue}>10 ETH</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.contractAddressText}>Contract Address</Text>
                <View style={styles.addressContainer}>
                  <Text style={styles.addressText}>0xab.....qef9937829</Text>
                  <Image source={require('../assets/link.png')} />
                </View>
              </View>
              <View style={styles.descriptionBox}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>
                  Meka from the MekaVerse - A collection of 8,888 unique
                  generative NFTs from an other universe
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  featuredNftContainer: {
    backgroundColor: '#1A2028',
  },
  favorite: {
    padding: 10,
    backgroundColor: '#ffffff',
    width: 40,
    borderRadius: 10,
    position: 'absolute',
    right: 30,
    top: 10,
  },
  profileDetails: {
    backgroundColor: '#1A2028',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 8,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: '100%',
  },
  contractAddressText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 20,
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: '#C6FF00',
    fontSize: 10,
    fontWeight: '400',
    marginRight: 10,
  },
  profileImageContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  profileImage: {
    marginTop: 8,
  },
  streamerNameRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionBox: {
    marginTop: 12,
  },
  descriptionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#ffffff',
  },
  description: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 15,
    color: '#848484',
    lineHeight: 20,
  },
  featuredNFTView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 20,
  },
  salePriceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  priceNameValue: {
    color: '#0DB7B7',
    fontWeight: '700',
    fontSize: 20,
  },
  saleText: {
    color: '#8D8D8D',
    fontWeight: '600',
    fontSize: 20,
  },
  streamerCategory: {
    fontSize: 10,
    fontWeight: '300',
    color: '#FFFFFF',
    marginLeft: 5,
  },
  streamerName: {
    fontSize: 16,
    color: '#8E8EA9',
    fontWeight: '600',
  },
  streamerTag: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 19,
  },
  image: {
    width: '95%',
    borderRadius: 10,
  },
  priceTag: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: 10,
    alignItems: 'center',
  },
  priceValue: {
    color: '#DCF587',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
  },
  currentPriceText: {
    fontSize: 14,
    color: '#848484',
    fontWeight: '500',
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginLeft: '5%',
    marginTop: 50,
  },
});
