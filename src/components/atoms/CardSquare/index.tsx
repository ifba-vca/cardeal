import React from 'react'
import {Container,Content,AvatarContainer,Avatar,TextContainer,Title,TextContent,Footer,TextRight,TextLeft} from './styles'

export enum CardSquareType{
    SQUARE="SQUARE",
    SLIM="SLIM",
    MEDIUM="MEDIUM"
}
export enum CardSquareColor{
    NONE="NONE",
    RED="RED",
    YELLOW="YELLOW",
    GREEN="GREEN",
    ORANGE="ORANGE",
    PINK="PINK",
    GREY="GREY",
    BLUE="BLUE"
}





export interface CardSquareProps {
  CardTitle?: String | null;
  image?: any | null;
  CardContent?: String | number | null;
  FooterTitle?: String | number | null;
  FooterContent?: String | number | null;
  color?: CardSquareColor | CardSquareColor.NONE;
  type: CardSquareType | CardSquareType.SQUARE;
  outlined: Boolean | false;
  hasFooter: Boolean | false;
}

const Index: React.FC<CardSquareProps> = (props) => {
  return (
    <>
        <Container
            color = {props.color}
            type = {props.type}
            outlined = {props.outlined}
        >
            <Content type = {props.type}>
                <AvatarContainer type = {props.type} image = {props.image}>
                    <Avatar src={props.image}/>
                </AvatarContainer>
                <TextContainer type = {props.type} image = {props.image}>
                    <Title type = {props.type} >{props.CardTitle}</Title>
                    <TextContent type = {props.type} image = {props.image}>{props.CardContent}</TextContent>
                </TextContainer>
            </Content>
            <Footer
                color = {props.color}
                outlined = {props.outlined}
                hasFooter = {props.hasFooter}
            >
                <TextRight 
                    hasFooter = {props.hasFooter}
                >
                    {props.FooterTitle}
                </TextRight>
                <TextLeft 
                    hasFooter = {props.hasFooter}
                >
                    {props.FooterContent}
                </TextLeft>
            </Footer>
        </Container>
    </>
  );
}

export default Index;
