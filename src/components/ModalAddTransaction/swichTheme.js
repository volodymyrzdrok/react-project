import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
// import { switchTheme } from './swichTheme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: 'red.500',
  },
  track: {
    bg: 'gray.100',
    _checked: {
      bg: 'gray.100',
    },
  },
});

export const theme = extendTheme({
  components: { Switch: switchTheme },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
