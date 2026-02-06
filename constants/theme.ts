/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#000000';
const tintColorDark = '#ffffff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#262626',
    tabIconDefault: '#262626',
    tabIconSelected: tintColorLight,
    border: '#DBDBDB',
    secondaryText: '#8E8E8E',
    buttonBlue: '#0095F6',
    heart: '#ED4956',
  },
  dark: {
    text: '#ECEDEE',
    background: '#000',
    tint: tintColorDark,
    icon: '#F5F5F5',
    tabIconDefault: '#F5F5F5',
    tabIconSelected: tintColorDark,
    border: '#262626',
    secondaryText: '#A8A8A8',
    buttonBlue: '#0095F6',
    heart: '#ED4956',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'System',
    serif: 'Georgia',
  },
  android: {
    sans: 'sans-serif',
    serif: 'serif',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
  },
});
