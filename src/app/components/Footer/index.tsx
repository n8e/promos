import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {}

const FooterComponent = styled.footer`
  border-top: 1px solid #e5e5e5;
  color: #8d8d8d;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
`;

export const Footer: FC<Props> = () => (
  <FooterComponent>
    © IT Promocodes, 2019
  </FooterComponent>
);
