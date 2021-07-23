/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import { 
  Text as DefaultText, 
  View as DefaultView,
  Image as DefaultImage,
  TouchableOpacity as DefaultButton 
} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ImageProps = ThemeProps & DefaultImage['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];


export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const Image = (props: ImageProps): JSX.Element => {
  const { style, ...otherProps } = props;
  return (
    <DefaultImage
      style={[{ width: 100, height: 100 }, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
};

export const StyButton = (props: ButtonProps): JSX.Element => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'tint',
  );
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DefaultButton style={[{ backgroundColor }, style]} {...otherProps} />;
};

