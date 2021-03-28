import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const StyledH1 = styled.h1`
  width: 100%;
  font-size: 38px;
  font-weight: 200;
  margin: 18px 0 40px 0;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  -ms-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;

export const H1: FC<Props> = ({ text }) => (<StyledH1>{text}</StyledH1>);
