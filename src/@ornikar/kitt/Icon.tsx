import React, { ReactElement } from 'react';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export interface IconProps {
  icon: ReactElement;
  size?: number;
  color: string;
  spin?: boolean;
  align?: ViewStyle['alignSelf'];
}

interface IconContainerProps {
  size?: number;
  color: string;
  align?: ViewStyle['alignSelf'];
}

const IconContainer = styled.View<IconContainerProps>`
  color: ${({ color }) => color};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  align-self: ${({ align = 'auto' }) => align};
`;

export function Icon({
  icon,
  size = 20,
  align,
  color,
}: IconProps): ReactElement {
  const clonedIcon = React.cloneElement(icon, { color });

  return (
    <IconContainer align={align} size={size} color={color}>
      {clonedIcon}
    </IconContainer>
  );
}
