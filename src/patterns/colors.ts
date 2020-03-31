import colors from 'colors/safe';

export const colorMappings = {
  yellow: colors.yellow,
  red: colors.red,
  magenta: colors.magenta,
  blue: colors.blue,
};

export type Color = keyof typeof colorMappings;
