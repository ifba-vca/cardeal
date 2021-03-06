import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {Discipline, DisciplineType } from '../interfaces/components/atoms'
import MatrixDiscipline from '../components/atoms/MatrixDiscipline'

export default {
  title: 'Matrix/MatrixDiscipline',
  component: MatrixDiscipline,
  argTypes: {
    type:{
        control: {
            type: 'select',
            options: ['CCO','MAT','COM','HUM','OPT','SUP','TEC'],
          }
    }
  }
} as Meta;


const Template: Story<Discipline> = (args) => <MatrixDiscipline discipline={args} />;

export const Exemplo = Template.bind({});
Exemplo.args = {
    "type": DisciplineType.CCO,
    "name": "Algoritmos e Programação",
    "teacher": "Liojes de Oliveira Carneiro",
    "description": "",
    "id": "ALG-PROG",
    "h_weekly": "4",
    "h_total": "36"
  };
