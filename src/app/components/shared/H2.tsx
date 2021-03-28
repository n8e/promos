import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
};

const StyledH2 = styled.h2`
  font-size: 26px;
  font-weight: 300;
`;

export const H2: FC<Props> = ({ text }) => (<StyledH2>{text}</StyledH2>);
