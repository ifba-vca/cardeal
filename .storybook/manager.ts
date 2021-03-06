import 'storybook-addon-styled-component-theme/dist/register';
import { addons } from '@storybook/addons';
import Cardeal from './Cardeal';

addons.setConfig({
  theme: Cardeal,
});