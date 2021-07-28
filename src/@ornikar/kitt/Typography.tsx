import React from 'react';
import { Text } from 'react-native';
import { Icon } from './Icon';
import { lateOceanColorPalette } from './lateOceanPalette';

export const typographyLateOceanTheme = {
  colors: {
    black: lateOceanColorPalette.black1000,
    'black-light': lateOceanColorPalette.black555,
    grey: lateOceanColorPalette.black555,
    'grey-light': lateOceanColorPalette.black200,
    white: lateOceanColorPalette.white,
    'white-light': lateOceanColorPalette.white,
    primary: lateOceanColorPalette.lateOcean,
    'primary-light': lateOceanColorPalette.lateOceanLight1,
    accent: lateOceanColorPalette.warmEmbrace,
    success: lateOceanColorPalette.viride,
    danger: lateOceanColorPalette.englishVermillon,
  },
};

export function TypographyIcon({ color = 'black', ...otherProps }) {
  return (
    <Icon color={typographyLateOceanTheme.colors[color]} {...otherProps} />
  );
}

export const Typography = {
  Text: function TypographyText({
    base = 'body',
    color = 'black',
    style = {},
    ...otherProps
  }) {
    return (
      <Text
        {...otherProps}
        style={{ ...style, color: typographyLateOceanTheme.colors[color] }}
      />
    );
  },
  Icon: TypographyIcon,
};
