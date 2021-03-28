import React, { FC } from 'react';
import styled from 'styled-components';
import { formatToCurrencyString } from 'app/utils';

interface Props {
  balance: number;
  payout: number;
}

const HeaderContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-height: 80px;
  position: fixed;
  padding: 20px 0;
  size: 1;
  top: 0;
  width: 100%;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  line-height: 0.4;
  margin: 0 32px;
  position: relative;
  top: -8px;

  & p {
    color: #8d8d8d;
    font-size: 14px;
  }

  & span {
    font-weight: 400;
    font-size: 18px;
  } 
`;

export const Header: FC<Props> = ({ balance, payout }) => (
  <HeaderContainer>
    <ColumnContainer>
      <p>Balance</p>
      <span>{formatToCurrencyString(balance)}</span>
    </ColumnContainer>

    <ColumnContainer>
      <p>Payout</p>
      <span>{formatToCurrencyString(payout)}</span>
    </ColumnContainer>
  </HeaderContainer>
);
