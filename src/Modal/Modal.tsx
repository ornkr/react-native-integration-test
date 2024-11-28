import React from 'react';
import { View } from 'react-native';
import { Typography, XIcon } from '../@ornikar/kitt';

// close button : <Typography.Icon color="black" icon={<XIcon />} />

interface ModalProps {
  visible?: boolean;
}

export function Modal({ visible = false }: ModalProps) {
  return (
    <View>
      <Typography.Text base="body" color="black" variant="regular">
        TODO.
      </Typography.Text>
    </View>
  );
}
