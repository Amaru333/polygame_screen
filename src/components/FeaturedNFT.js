import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import NFTList from './NFTList';

export default function FeaturedNFT() {
  return (
    <SafeAreaView style={styles.featuredNftContainer}>
      <ScrollView>
        <View style={styles.featuredNftInnerContainer}>
          <View style={styles.categoryHeader}>
            <Text style={styles.textFormat}>Categories</Text>
            <Text style={styles.viewAllText}>View all</Text>
          </View>
          <View style={styles.categories}>
            <Text style={styles.categoriesFont}>Art</Text>
            <Text style={styles.categoriesFont}>Music</Text>
            <Text style={styles.categoriesFont}>Games</Text>
            <Text style={styles.categoriesFont}>Domains</Text>
          </View>
          <View>
            <Text style={styles.textFormat}>Featured NFTs</Text>
            <ScrollView horizontal={true}>
              <View style={styles.featuredNfts}>
                <NFTList />
              </View>
              <View style={styles.featuredNfts}>
                <NFTList />
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.textFormat}>Top collection in</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  featuredNftContainer: {
    backgroundColor: '#1A2028',
  },
  categoryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  featuredNfts: {
    alignItems: 'center',
    margin: 20,
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  categoriesFont: {
    fontSize: 13,
    color: '#ffffff',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 11,
  },
  viewAllText: {
    color: '#848484',
    fontSize: 14,
  },
  featuredNftInnerContainer: {
    padding: 10,
  },
  textFormat: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
