import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {IfbaLogoProps} from '../interfaces/components/atoms'
import IfbaLogo from '../components/atoms/IfbaLogo'

export default {
  title: 'Logos/IfbaLogo',
  component: IfbaLogo,
} as Meta;


const Template: Story<IfbaLogoProps> = (args) => <IfbaLogo 
    logoSize={args.logoSize}
    textSize ={args.textSize}    
    circleColor ={args.circleColor}
    squareColor ={args.squareColor}
    primaryColor ={args.primaryColor}
    secondaryColor ={args.secondaryColor}
/>;

export const Exemplo = Template.bind({});
Exemplo.args = {
    logoSize: 40,
    textSize: 9,
    circleColor: "",
    squareColor: "",
    primaryColor: "",
    secondaryColor: ""
  };

  export const Big = Template.bind({});
  Big.args = {
      logoSize: 70,
      textSize: 12,
      circleColor: "--si-red-01",
      squareColor: "--si-green-01",
      primaryColor: "--si-green-01",
      secondaryColor: "--si-green-01"
    };
  