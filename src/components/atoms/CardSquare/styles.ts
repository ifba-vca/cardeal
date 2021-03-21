import styled from 'styled-components';
import { _ubutextlittle } from '../../../Styles/generic/Typography';
import {CardSquareType} from './index'

export const Container = styled.div<{color: any, type: any, outlined: any}>`
    background-color: ${props => {
        if(props.outlined){
            switch (props.color) {
                case "RED":
                  return "var(--si-magenta-01)";
                  break;
                case "YELLOW":
                  return "var(--si-yellow-01)";
                  break;
                case "GREEN":
                  return "var(--si-mate-01)";
                  break;
                case "ORANGE":
                  return "var(--si-orange-01)";
                  break;
                case "PINK":
                  return "var(--si-pink-01)";
                  break;
                case "BLUE":
                  return "var(--si-blue-02)";
                  break;
                case "GREY":
                  return "var(--si-blue-01)";
                  break;
                default:
                  return "var(--si-background-02)";
                  break;
              }
        }else{
            return 'var(--si-background-02)'
        }
    }};
    width:${props => {
        switch (props.type){
            case "SQUARE":
                return "100px"
                break;
            case "SLIM":
                return "320px"
                break;
            case "MEDIUM":
                return "320px"
                break;
        }
    }};
    height: ${props => {
        switch (props.type){
            case "SQUARE":
                return "100px"
                break;
            case "SLIM":
                return "50px"
                break;
            case "MEDIUM":
                return "150px"
                break;
        }
    }};
    display: flex;
    flex-direction:column;
    border-radius: 10px;
    transition: .1s;
    overflow: hidden;
    margin: 5px;
    transition: 0.5s;
    & * {
        transition: 0.5s;
    }
`;

export const Content = styled.div<{type: any}>`
    display: flex;
    flex:1;
    padding: 0 14px;
    align-items: center;
    flex-direction: ${props => {
        if (props.type == "SQUARE") {
            return "column"
        }else{
            return "row"
        }
    }};
    justify-content: ${props => {
        if (props.type == "SQUARE") {
            return "center"
        }else{
            return "flex-start"
        }
    }};
`;

export const AvatarContainer = styled.div<{type: any, image: any}>`
    width: ${props => {
        switch (props.type) {
            case "MEDIUM":
              return "100px";
              break;
            default:
              return "30px";
              break;
          }
    }};
    height:${props => {
        switch (props.type) {
            case "MEDIUM":
              return "100px";
              break;
            default:
              return "30px";
              break;
          }
    }};
    display: ${props => {
        if (props.image) {
            return "flex"
        }else{
            return "none"
        }
    }};
    position: ${props => {
        if (props.type == "SLIM") {
            return "absolute"
        }else{
            return "static"
        }
    }};
    margin-top: ${props => {
        if (props.type == "SLIM") {
            return "15px"
        }else{
            return "0"
        }
    }};
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 100px;
    background-color: var(--si-background-01);
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
`;

export const TextContainer = styled.div<{type: String, image: any}>`
    display:flex;
    margin-left: ${props => {
        if (props.image && props.type == "MEDIUM") {
            return "15px"
        }else if (props.image && props.type == "SLIM") {
            return "45px"
        }else{
            return "0"
        }
    }};
    flex-direction: column;
`;

export const Title = styled.p<{type: any}>`
    width: 100%;
    font-weight: bold;
    text-align: ${props => {
        if (props.type == "SQUARE") {
            return "center"
        }else{
            return "left"
        }
    }};
`;

export const TextContent = styled.p<{type: any, image: any}>`
    ${_ubutextlittle}
    display: ${props => {
        switch (props.type) {
            case "MEDIUM":
              return "flex";
              break;
            default:
              return "none";
              break;
          }
    }};
    width: ${props => {
        if (props.image) {
            return "180px"
        }else{
            return "100%"
        }
    }};
    flex:1;
`;

export const Footer = styled.div<{color: any, outlined: any, hasFooter: any}>`
    display: flex;
    width: 100%;
    height: ${props => {
        if (props.hasFooter) {
            return "20px"
        }else{
            return "10px"
        }
    }};
    background-color: ${props => {
        if(!props.outlined){
            switch (props.color) {
                case "RED":
                  return "var(--si-magenta-01)";
                  break;
                case "YELLOW":
                  return "var(--si-yellow-01)";
                  break;
                case "GREEN":
                  return "var(--si-mate-01)";
                  break;
                case "ORANGE":
                  return "var(--si-orange-01)";
                  break;
                case "PINK":
                  return "var(--si-pink-01)";
                  break;
                case "BLUE":
                  return "var(--si-blue-01)";
                  break;
                case "GREY":
                  return "var(--si-blue-02)";
                  break;
                default:
                  return "var(--si-background-02)";
                  break;
              }
        }else{
            return 'var(--si-background-02)'
        }
    }};
    align-items: center;
    justify-content: space-between;
`;

export const TextRight = styled.p<{hasFooter: any}>`
    height:100%;    
    display: ${props => {
        if (props.hasFooter) {
            return "flex"
        }else{
            return "none"
        }
    }};
    flex:1;
    align-items:center;
    justify-content:center;
    flex-wrap: none;
    overflow:hidden;
`;

export const TextLeft = styled.p<{hasFooter: any}>`
    width: 30px;
    height:100%;
    background-color: var(--si-background-02);
    display: ${props => {
        if (props.hasFooter) {
            return "flex"
        }else{
            return "none"
        }
    }};
    align-items:center;
    justify-content:center;
    overflow:hidden;
`;