import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Typography, Icon, XIcon, Button } from '../@ornikar/kitt';
import styles from './styles';

// close button : <Typography.Icon icon={<XIcon />} />
// bouton violet: <Button onPress={() => {}} type="primary">Contenu</Button>

export function Modal({
  visible,
  primaryButtonLabel,
  secondaryButtonLabel,
  showFooter,
  showTitle,
  title,
  children,

  onClosePress,
}) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          {showTitle && (
            <Typography.Text style={styles.title}>{title}</Typography.Text>
          )}
          <TouchableOpacity onPress={onClosePress}>
            <Typography.Icon icon={<XIcon />} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
        {showFooter && (
          <View style={styles.footer}>
            <Button stretch onPress={() => {}} type="primary">
              {primaryButtonLabel}
            </Button>
            <Button stretch onPress={() => {}}>
              {secondaryButtonLabel}
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}
