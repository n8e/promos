import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  fontSize?: string;
  htmlFor?: string
  margin?: string;
}

const StyledSnackbar = styled.div`
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
  background-color: #333;
  bottom: 30px;
  border-radius: 2px;
  color: #fff;
  font-size: 17px;
  left: 50%;
  min-width: 250px;
  margin-left: -125px;
  padding: 16px;
  position: fixed;
  text-align: center;
  visibility: visible;
  z-index: 1;

  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
  }
  
  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 0; opacity: 0;}
  }
  
  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
`;

export const Snackbar: FC<Props> = props => (<StyledSnackbar>{props.children}</StyledSnackbar>);
