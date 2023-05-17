import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './@ornikar/kitt';
import { Modal } from './Modal/Modal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [visibleModal, setVisibleModal] = useState<string>();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={() => setVisibleModal('simple')}>
        {'Open up Modal "simple"'}
      </Button>
      <Modal visible={visibleModal === 'simple'} />
    </View>
  );
}
