import React, { FC } from 'react'
import styled from 'styled-components';

interface Props {
  flexDirection?: string;
  height?: string;
  justifyContent?: string; 
  size?: string;
}

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex: ${props => props.size};
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent};
`;

export const Flex: FC<Props> = props => {
  return <FlexContainer {...props} />;
};

Flex.defaultProps = {
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'flex-start',
  size: "1"
};
