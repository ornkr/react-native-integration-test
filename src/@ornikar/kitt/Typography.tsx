import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';
import { Icon, IconProps } from './Icon';
import { lateOceanColorPalette } from './lateOceanPalette';

type TypographyVariant = 'regular' | 'bold';
export type TypographyColor =
  | 'black'
  | 'black-light'
  | 'white'
  | 'white-light'
  | 'grey'
  | 'grey-light'
  | 'primary'
  | 'primary-light'
  | 'accent'
  | 'success'
  | 'danger';

const typographyLateOceanTheme = {
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

export function TypographyIcon({
  color = 'black',
  ...otherProps
}: Omit<IconProps, 'color'> & { color: TypographyColor }) {
  return (
    <Icon color={typographyLateOceanTheme.colors[color]} {...otherProps} />
  );
}

export const Typography = {
  Text: function TypographyText({
    base = 'body',
    color = 'black',
    variant = 'regular',
    style,
    ...otherProps
  }: PropsWithChildren<
    TextProps & {
      base: string;
      variant: TypographyVariant;
      color: TypographyColor;
    }
  >) {
    return (
      <Text
        {...otherProps}
        style={[
          style || {},
          {
            color: typographyLateOceanTheme.colors[color],
            fontWeight: variant === 'bold' ? 'bold' : 'normal',
          },
        ]}
      />
    );
  },
  Icon: TypographyIcon,
};
