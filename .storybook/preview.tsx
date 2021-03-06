import React from 'react'
import Styles from '../src/Styles'
import Cardeal from './Cardeal';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: Cardeal,
  },
};

export const decorators = [
  (Story) => (
    <>
      <Styles dark={true} />
      <Story />
    </>
  ),
];