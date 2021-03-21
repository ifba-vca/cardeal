import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CardSquare,{CardSquareType,CardSquareColor,CardSquareProps} from '.'

export default {
  title: 'Components/CardSquare',
  component: CardSquare,
  argTypes: {
    color:{
        control: {
            type: 'select',
            options: ['RED','YELLOW','GREEN','ORANGE','PINK','GREY','BLUE'],
          }
    },
    type:{
        control: {
            type: 'select',
            options: ['SQUARE','SLIM','MEDIUM'],
          }
    }
  }
} as Meta;


const Template: Story<CardSquareProps> = (args) => <CardSquare 
    CardTitle={args.CardTitle} 
    image={args.image} 
    CardContent={args.CardContent} 
    FooterTitle={args.FooterTitle} 
    FooterContent={args.FooterContent}
    color={args.color} 
    type={args.type} 
    outlined={args.outlined} 
    hasFooter={args.hasFooter} 
/>;

export const Square = Template.bind({});
Square.args = {
    "CardTitle": "Card Title",
    "image": "",
    "CardContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet a erat et aliquet. In non risus vel massa viverra fermentum. Maecenas et ultrices mauris. Aenean tristique vulputate posuere.",
    "FooterTitle": "Footer Text",
    "FooterContent": "00",
    "color": CardSquareColor.RED,
    "type": CardSquareType.SQUARE,
    "outlined": false,
    "hasFooter": false,
  };


export const Slim= Template.bind({});
Slim.args = {
    "CardTitle": "Card Title",
    "image": "",
    "CardContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet a erat et aliquet. In non risus vel massa viverra fermentum. Maecenas et ultrices mauris. Aenean tristique vulputate posuere.",
    "FooterTitle": "Footer Text",
    "FooterContent": "00",
    "color": CardSquareColor.RED,
    "type": CardSquareType.SLIM,
    "outlined": false,
    "hasFooter": true,
  };


export const Medium = Template.bind({});
Medium.args = {
    "CardTitle": "Card Title",
    "image": "",
    "CardContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet a erat et aliquet. In non risus vel massa viverra fermentum. Maecenas et ultrices mauris. Aenean tristique vulputate posuere.",
    "FooterTitle": "Footer Text",
    "FooterContent": "00",
    "color": CardSquareColor.RED,
    "type": CardSquareType.MEDIUM,
    "outlined": true,
    "hasFooter": true,
  };
