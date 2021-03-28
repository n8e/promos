import React, { FC, useState } from 'react';
import { Copy } from 'react-feather';
import styled from 'styled-components';
import { ServiceModel } from 'app/models';
import { Button, Flex, H2, Label, Snackbar } from 'app/components/shared';

interface Props {
  service: ServiceModel;
}

const ServiceItemContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  height: 80px;
  margin-bottom: 25px;
  padding: 30px;
`;

const PromoCodeContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  height: 48px;
  line-height: 48px;
  padding: 0 18px;
  vertical-align: middle;
  width: 300px
`;

export const ServiceItem: FC<Props> = ({ service }) => {
  const [showSnack, setShowSnack] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowSnack(!showSnack);
    setTimeout(() => setShowSnack(false), 3000);
  };

  return (
    <ServiceItemContainer>
      {showSnack && <Snackbar>Promocode copied to clipboard!</Snackbar>}
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flexDirection="column" justifyContent="flex-end" size="1.4">
          <H2 text={service.title} />
          <Label fontSize="14px">{service.description}</Label>
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-end">
          <Label>PROMOCODE</Label>
          <PromoCodeContainer>
            <Flex flexDirection="row" justifyContent="space-between">
              <span>{service.promocode}</span>
              <Copy
                color="#0485FF"
                style={{ top: '12px', position: 'relative' }}
                onClick={() => copyToClipboard(service.promocode)}
              />
            </Flex>
          </PromoCodeContainer>
        </Flex>

        <Flex flexDirection="column" justifyContent="flex-end">
          <Button text="Activate bonus" backgroundColor="#0485FF" color="#FFF" width="300px" />
        </Flex>

      </Flex>
    </ServiceItemContainer>
  );
};
