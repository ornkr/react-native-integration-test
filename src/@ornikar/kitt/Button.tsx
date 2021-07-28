import React, { ReactNode, ReactElement, useState } from 'react';
import styled from 'styled-components/native';
import { Typography, TypographyColor, TypographyIcon } from './Typography';
import { lateOceanColorPalette } from './lateOceanPalette';

export type ButtonType = 'primary' | 'secondary' | 'subtle' | 'subtle-dark';

type IconPosition = 'right' | 'left';

export const buttonLateOceanTheme = {
  borderRadius: '30px',
  borderWidth: '2px',
  minHeight: '42px',
  minWidth: '76px',
  iconSize: 18,
  contentPadding: {
    default: '8px 16px',
  },
  primary: {
    backgroundColor: lateOceanColorPalette.lateOcean,
    disabledBackgroundColor: lateOceanColorPalette.black50,
    pressedBackgroundColor: lateOceanColorPalette.lateOceanLight1,
    disabledBorderColor: lateOceanColorPalette.black100,
  },
  secondary: {
    backgroundColor: lateOceanColorPalette.black50,
    disabledBackgroundColor: lateOceanColorPalette.black50,
    pressedBackgroundColor: lateOceanColorPalette.black100,
    disabledBorderColor: lateOceanColorPalette.black100,
  },
  subtle: {
    backgroundColor: lateOceanColorPalette.transparent,
    disabledBackgroundColor: lateOceanColorPalette.transparent,
    pressedBackgroundColor: lateOceanColorPalette.transparent,
    disabledBorderColor: lateOceanColorPalette.transparent,
  },
  'subtle-dark': {
    backgroundColor: lateOceanColorPalette.transparent,
    disabledBackgroundColor: lateOceanColorPalette.transparent,
    pressedBackgroundColor: lateOceanColorPalette.transparent,
    disabledBorderColor: lateOceanColorPalette.transparent,
  },
};

const getTextColorByType = (
  type: ButtonType,
  isPressed: boolean,
  disabled: boolean,
): TypographyColor => {
  if (disabled) return 'black-light';
  switch (type) {
    case 'primary':
      return 'white';
    case 'secondary':
      return 'black';
    case 'subtle':
      return isPressed ? 'primary-light' : 'primary';
    case 'subtle-dark':
      return isPressed ? 'black-light' : 'black';
    default:
      return 'black';
  }
};

export interface ButtonProps {
  children?: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  stretch?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
}

interface ContainerProps {
  type: ButtonType;
  isCentered: boolean;
  isPressed?: boolean;
  stretch: boolean;
  disabled: boolean;
}

const theme = { spacing: 4, button: buttonLateOceanTheme };
const ButtonContainer = styled.Pressable<ContainerProps>`
  min-width: ${({}) => theme.button.minWidth};
  min-height: ${({}) => theme.button.minHeight};
  background-color: ${({ isPressed, disabled, type }) => {
    if (disabled) {
      return theme.button[type].disabledBackgroundColor;
    }

    return isPressed
      ? theme.button[type].pressedBackgroundColor
      : theme.button[type].backgroundColor;
  }};
  padding: ${({}) => theme.button.contentPadding.default};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ isCentered }) =>
    isCentered ? 'center' : 'space-between'};
  align-self: ${({ stretch }) => (stretch ? 'stretch' : 'center')};
  border-radius: ${({}) => theme.button.borderRadius};
  border-color: ${({ disabled, type }) =>
    disabled ? theme.button[type].disabledBorderColor : 'transparent'};
  border-width: ${({}) => theme.button.borderWidth};
`;

const LeftIconContainer = styled.View`
  margin-right: ${({}) => theme.spacing * 3}px;
`;

const LoaderContainer = styled.View`
  margin-right: ${({}) => theme.spacing * 3}px;
`;

const RightIconContainer = styled.View`
  margin-left: ${({}) => theme.spacing * 3}px;
`;

export function Button({
  children,
  onPress,
  disabled = false,
  icon,
  iconPosition,
  stretch = false,
  type = 'primary',
}: ButtonProps): ReactElement {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handleButtonPressIn = (): void => setIsPressed(true);
  const handleButtonPressOut = (): void => setIsPressed(false);
  const textColor = getTextColorByType(type, isPressed, disabled);
  return (
    <ButtonContainer
      // TODO: When designs are defined, update with the proper onPress styles to mimic TouchableHighlight
      // underlayColor={globalTheme.button[type].pressedBackgroundColor}
      disabled={disabled}
      type={type}
      stretch={stretch}
      isCentered={icon === undefined || children === undefined}
      isPressed={isPressed}
      onPress={onPress}
      onPressIn={handleButtonPressIn}
      onPressOut={handleButtonPressOut}
    >
      <>
        {icon !== undefined && iconPosition === 'left' && (
          <LeftIconContainer>
            <TypographyIcon
              icon={icon}
              size={theme.button.iconSize}
              color={textColor}
            />
          </LeftIconContainer>
        )}
        {children === undefined && icon !== undefined && (
          <TypographyIcon
            icon={icon}
            size={theme.button.iconSize}
            color={textColor}
          />
        )}
        {children !== undefined && (
          <>
            <Typography.Text base="body" color={textColor} variant="bold">
              {children}
            </Typography.Text>
          </>
        )}
        {icon !== undefined && iconPosition === 'right' && (
          <RightIconContainer>
            <TypographyIcon
              icon={icon}
              size={theme.button.iconSize}
              color={textColor}
            />
          </RightIconContainer>
        )}
      </>
    </ButtonContainer>
  );
}
