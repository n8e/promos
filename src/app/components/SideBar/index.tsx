import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
}

type MenuTrackerProps = {
  selected: boolean;
}

const SideBarContainer = styled.div`
  background-color: #1c1e2a;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  position: absolute;
  size: 1;
  width: 80px;
  z-index: 99;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-bottom: 50px;
`;

const OuterCircle = styled.div<MenuTrackerProps>`
  background-color: ${props => props.selected ? '#fff' : '#8d8d8d'};
  border-radius: 14px;
  cursor: pointer;
  height: 28px;
  margin-bottom: 50px;
  width: 28px;
`;

const InnerCircle = styled.div`
  background-color: #1c1e2a;
  border-radius: 10px;
  height: 20px;
  margin: 4px;
  width: 20px;
`;

const MenuTracker: FC<MenuTrackerProps> = ({ selected }) => {
  return (
    <OuterCircle selected={selected}>
      <InnerCircle />
    </OuterCircle>
  )
}

export const SideBar: FC<Props> = () => (
  <SideBarContainer>
    <Logo src="../../../assets/logo.png" />

    <ColumnContainer>
      {
        [
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: false },
          { selected: true },
          { selected: false },
        ].map((item, i) => (
          <MenuTracker selected={item.selected} key={i} />
        ))
      }
    </ColumnContainer>
  </SideBarContainer>
);
