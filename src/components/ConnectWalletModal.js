import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

export default function ConnectWalletModal() {
  return (
    <SafeAreaView>
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.titleText}>Connect wallet</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View>
          <Text style={styles.walletText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
            commodo vitae, eget vitae viverra nec facilisis ipsum. Pulvinar nec
            diam sit pellentesque nulla eu diam pharetra turpis. Aliquam nunc
            metus imperdiet interdum vel.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <Text style={styles.cancelButton}>Cancel</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.signInButton}>Sign into wallet</Text>
          </Pressable>
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
  imageContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  walletText: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20,
    color: '#ffffff',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C6FF00',
  },
  buttonContainer: {
    margin: 15,
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    color: '#C6FF00',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#C6FF00',
    borderRadius: 10,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#C6FF00',
    color: '#212134',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderColor: '#C6FF00',
    borderRadius: 10,
    fontWeight: '600',
  },
});
