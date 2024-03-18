import { StyleSheet } from 'react-native';
export const TEXT_SIZE = 16;

export const COLORS = {
    primary: '#14AE96',
    secondary: '#FD9900',
    tertairy: '#FE9EF4',
    text: '#33375D',
    success: '#64BC26',
    warning: '#FD6940',
    error: '#FD2000',
    white: '#FFF',
    black: '#33375D',
};

export const SIZES = {
    // common sizes
    base: 8,
    text: TEXT_SIZE,
    padding: 24,

    // font sizes
    h1: TEXT_SIZE + 2 * 8,
    h2: TEXT_SIZE + 2 * 6,
    h3: TEXT_SIZE + 2 * 4,
    h4: TEXT_SIZE + 2 * 2,
    p: TEXT_SIZE + 2,
    small: TEXT_SIZE - 2,

    // button sizes
    buttonHeight: 40,
    buttonRadius: 4,
    buttonBorder: 0,

    // input sizes
    inputHeight: 40,
    inputRadius: 4,
    inputBorder: StyleSheet.hairlineWidth,
};

export const LINE_HEIGHTS = {
    h1: Math.round(SIZES.h1 * 1.1),
    h2: Math.round(SIZES.h2 * 1.2),
    h3: Math.round(SIZES.h3 * 1.3),
    h4: Math.round(SIZES.h4 * 1.3),
    p: Math.round(SIZES.p * 1.3),
    text: Math.round(SIZES.text * 1.3),
    small: Math.round(SIZES.small),
};
export const LINE_SPACING = {
    h1: -SIZES.h1 * 0.03,
    h2: -SIZES.h2 * 0.03,
    h3: -SIZES.h3 * 0.03,
    h4: -SIZES.h4 * 0.03,
    p: 0,
    text: 0,
    small: 0,
};

export const SPACING = {
    xs: SIZES.base / 2,
    s: SIZES.base,
    sm: SIZES.base * 1.5,
    m: SIZES.base * 2,
    md: SIZES.base * 2.5,
    l: SIZES.base * 3,
    xl: SIZES.base * 3.5,
    xxl: SIZES.base * 4,
};

const THEME = {
    colors: COLORS,
    sizes: {...SIZES, ...SPACING },
    lines: LINE_HEIGHTS,
    letters: LINE_SPACING,
};

export default THEME;