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
import HistoryComponent from './HistoryComponent';

let ScreenHeight = Dimensions.get('window').height;
export default function MyHistory() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.historyPageContainer}>
          <View style={styles.historyTitleContainer}>
            <Image source={require('../assets/history_logo.png')} />
            <Text style={styles.historyTitle}>My History</Text>
          </View>
          <View>
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
            <HistoryComponent />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  historyPageContainer: {
    backgroundColor: '#1A2028',
    minHeight: ScreenHeight,
  },
  historyTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DCF587',
    margin: 10,
    padding: 10,
  },
  historyTitle: {
    color: '#C6FF00',
    fontSize: 24,
    fontWeight: '450',
    marginLeft: 10,
  },
});
