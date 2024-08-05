import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';

export default function App() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe
          src="./aframe-scene.html"
          style={styles.webview}
          title="AR Scene"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>AR.js is not supported on this platform.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
});
