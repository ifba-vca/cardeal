import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {Discipline} from '../interfaces/components/atoms'
import MatrixDiscipline from '../components/atoms/MatrixDiscipline'

export default {
  title: 'Matrix/MatrixDiscipline',
  component: MatrixDiscipline,
} as Meta;


const Template: Story<Discipline> = (args) => <MatrixDiscipline discipline={args} />;

export const Exemplo = Template.bind({});
Exemplo.args = {
    "type": "CCO",
    "name": "Algoritmos e Programação",
    "teacher": "Liojes de Oliveira Carneiro",
    "description": "",
    "id": "ALG-PROG",
    "h_weekly": "4",
    "h_total": "36"
  };
