import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
  color?: string;
  height?: string;
  text: string;
  width?: string;
  onClick?: (event: any) => void;
}

const StyledButton = styled.button<Props>`
  margin: 0;
  padding: 0;
  border: 1px solid #8d8d8d;
  border-radius: 4px;
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: inherit;
  font-size: 16px;
  font-smoothing: antialiased;
  font-weight: inherit;
  height: ${props => props.height};
  vertical-align: baseline;
  width: ${props => props.width};
`;

export const Button: FC<Props> = props => (<StyledButton {...props}>{props.text}</StyledButton>);

Button.defaultProps = {
  backgroundColor: 'none',
  color: 'inherit',
  height: '48px',
  width: '148px',
};
