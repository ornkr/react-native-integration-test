import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Typography } from './@ornikar/kitt';
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
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={() => setVisibleModal((prevState) => !prevState)}>
        {'Open up Modal "simple"'}
      </Button>
      <Modal
        visible={visibleModal}
        title="Titre"
        showTitle
        showFooter
        primaryButtonLabel="Primary"
        secondaryButtonLabel="Secondary"
        onClosePress={() => setVisibleModal(false)}
      >
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
        <Button stretch onPress={() => {}}>
          Random button
        </Button>
        <Typography.Text>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography.Text>
      </Modal>
    </View>
  );
}
