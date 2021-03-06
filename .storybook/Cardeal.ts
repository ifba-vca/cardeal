import { create } from '@storybook/theming';
import logo from '../src/util/png/logo.png';

export default create({
  base: 'dark',
  brandTitle: 'Cardeal',
  brandUrl: 'https://example.com',
  brandImage: logo,

  // UI
  appBg: '#282C34',
  appContentBg: '#1F232C',
  appBorderColor: '#282C34',
  appBorderRadius: 10,

  // Typography
  fontBase: 'Ubuntu',
  fontCode: 'Fira Code',

  // Text colors
  textColor: '#E5E5E5',
  textInverseColor: '#282C34',

  // Toolbar default and active colors
  barTextColor: '#E5E5E5',
  barSelectedColor: '#0075FF',
  barBg: '#1F232C',

  // Form colors
  inputBg: '#282C34',
  inputBorder: '#E5E5E5',
  inputTextColor: '#E5E5E5',
  inputBorderRadius: 4,

});