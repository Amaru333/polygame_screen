import React, {useState} from 'react';
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
  Switch,
} from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

export default function CreateYourNFT() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.statisticPageContainer}>
          <View style={styles.historyTitleContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.historyTitle}>Create your NFT</Text>
          </View>
          <View style={styles.horizontalPadding}>
            <View>
              <Text style={styles.uploadFileText}>Upload File</Text>
            </View>
            <View style={styles.uploadContainer}>
              <View style={styles.uploadContainerText}>
                <Text style={styles.uploadInstructionText}>
                  PNG, GIF, WEBP, MP4 OR MP3
                </Text>
                <Text style={styles.uploadInstructionText}>MAX 100mb</Text>
                <Text style={styles.chooseFileButton}>Choose A File</Text>
              </View>
            </View>
            <View>
              <Text style={styles.marketplaceTitle}>Put on marketplace</Text>
              <Text style={styles.marketplaceDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra at integer felis,
              </Text>
              <View style={styles.sellTypeContainer}>
                <View style={styles.activeSelection}>
                  <Image source={require('../assets/price_tag.png')} />
                  <Text style={styles.activeSelectionText}>Fixed price</Text>
                </View>
                <View style={styles.inactiveSelection}>
                  <Image source={require('../assets/infinite.png')} />
                  <Text style={styles.inactiveSelectionText}>
                    Open for bids
                  </Text>
                </View>
                <View style={styles.inactiveSelection}>
                  <Image source={require('../assets/time.png')} />
                  <Text style={styles.inactiveSelectionText}>
                    Timed Auction
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.uploadFileText}>Price</Text>
              <View>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Enter price for one piece"
                  placeholderTextColor={'#ABABAB'}
                />
                <Text style={styles.currency}>PGEM</Text>
              </View>
            </View>
            <View>
              <Text style={styles.fee1}>
                Service fee <Text style={styles.fee2}>2.5%</Text>
              </Text>
              <Text style={styles.fee1}>
                You will receive <Text style={styles.fee2}>2.5PGEM</Text>
              </Text>
            </View>
            <View style={styles.verticalMargin5}>
              <View style={styles.switchContainer}>
                <Text style={styles.marketplaceTitle}>
                  Unlock once purchased
                </Text>
                <Switch
                  trackColor={{false: '#DADADA', true: '#FF652E'}}
                  thumbColor={isEnabled ? '#FF6A32' : '#D5D5D5'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Text style={styles.marketplaceDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra at integer felis,
              </Text>
            </View>
            <View style={styles.verticalMargin5}>
              <View style={styles.switchContainer}>
                <Text style={styles.marketplaceTitle}>Free minting</Text>
                <Switch
                  trackColor={{false: '#DADADA', true: '#FF652E'}}
                  thumbColor={isEnabled ? '#FF6A32' : '#D5D5D5'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Text style={styles.marketplaceDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra at integer felis,
              </Text>
            </View>
            <View>
              <Text style={styles.uploadFileText}>Name</Text>
              <View>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Lorem"
                  placeholderTextColor={'#ABABAB'}
                />
              </View>
            </View>
            <View>
              <Text style={styles.uploadFileText}>Description</Text>
              <View>
                <TextInput
                  multiline
                  numberOfLines={6}
                  style={styles.textInputStyle}
                  placeholder="Lorem"
                  placeholderTextColor={'#ABABAB'}
                />
              </View>
            </View>
            <View>
              <Text style={styles.uploadFileText}>Royalties</Text>
              <View>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Lorem"
                  placeholderTextColor={'#ABABAB'}
                />
              </View>
            </View>
            <View style={styles.sellTypeContainer}>
              <Text style={styles.cancelButton}>CANCEL</Text>
              <Text style={styles.createButton}>CREATE NFT</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  statisticPageContainer: {
    backgroundColor: '#1A2028',
    minHeight: ScreenHeight,
    padding: 10,
  },
  cancelButton: {
    color: '#EB5757',
    borderWidth: 1,
    borderColor: '#EB5757',
    // paddingHorizontal: '10%',
    width: '47%',
    paddingVertical: 15,
    fontSize: 14,
    fontWeight: '600',
    borderRadius: 8,
    textAlign: 'center',
  },
  createButton: {
    color: '#212134',
    borderWidth: 1,
    backgroundColor: '#C6FF00',
    borderColor: '#C6FF00',
    borderRadius: 8,
    width: '47%',
    paddingVertical: 15,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  activeSelection: {
    backgroundColor: '#C6FF00',
    // paddingHorizontal: 20,
    // paddingVertical: 40,
    height: 150,
    width: 110,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSelectionText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    color: '#212134',
    width: '50%',
    textAlign: 'center',
  },
  inactiveSelection: {
    // paddingHorizontal: 20,
    // paddingVertical: 40,
    width: 110,
    justifyContent: 'center',
    height: 150,
    borderWidth: 1,
    borderColor: '#EEFAC3',
    borderRadius: 8,
    alignItems: 'center',
  },
  inactiveSelectionText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    width: '50%',
  },
  sellTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  fee1: {
    color: '#ABABAB',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
  },
  fee2: {
    color: '#C6FF00',
    fontSize: 13,
    fontWeight: '500',
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalMargin5: {
    marginVertical: 5,
  },
  marketplaceDescription: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 10,
  },
  marketplaceTitle: {
    color: '#C6FF00',
    fontSize: 16,
    marginTop: 15,
  },
  horizontalPadding: {
    paddingHorizontal: 10,
  },
  chooseFileButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#EEFAC3',
    color: '#EEFAC3',
    borderRadius: 10,
    marginTop: 10,
  },
  uploadInstructionText: {
    fontWeight: '500',
    fontSize: 13,
    color: '#A5A5BA',
    marginBottom: 10,
  },
  uploadContainerText: {
    padding: 30,
    display: 'flex',
    alignItems: 'center',
  },
  uploadContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#4A4A6A',
    borderRadius: 5,
    backgroundColor: '#13171D',
  },
  uploadFileText: {
    paddingVertical: 10,
    color: 'white',
    fontSize: 15,
  },
  logo: {
    width: 40,
    height: 40,
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
  textInputStyle: {
    backgroundColor: '#13171D',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 60,
    color: '#ffffff',
  },
  currency: {
    color: '#FF733A',
    fontSize: 13,
    fontWeight: '500',
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});
