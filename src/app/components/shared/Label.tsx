import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  fontSize?: string;
  htmlFor?: string
  margin?: string;
}

const StyledLabel = styled.label<Props>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
`;

export const Label: FC<Props> = props => (<StyledLabel {...props}>{props.children}</StyledLabel>);

Label.defaultProps = {
  color: '#8d8d8d',
  fontSize: '11px',
  margin: '0',
};
