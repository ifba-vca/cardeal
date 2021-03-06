
import React from 'react';
import {Container,Text,TextPrimary,TextSecondary} from './styles';
import Ifba from '../Ifba';
import{IfbaLogoProps} from '../../../interfaces/components/atoms'

const Index: React.FC<IfbaLogoProps> = props => {
      return (
        <>
            <Container>
              <Ifba width={props.logoSize} cColor={props.circleColor} sColor={props.squareColor}/>
              <Text width={props.textSize}>
                <TextPrimary color={props.primaryColor}>
                  Instituto Federal de
                </TextPrimary>
                <TextPrimary color={props.primaryColor}>
                  Educação, Ciência e Tecnologia
                </TextPrimary>
                <TextSecondary color={props.secondaryColor}>
                  BAHIA
                </TextSecondary>
                <TextSecondary color={props.secondaryColor}>
                  Campus Vitória da Conquista
                </TextSecondary>
              </Text>
            </Container>
        </>
      );
    }

export default Index;