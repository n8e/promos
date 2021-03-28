import React, { FC } from 'react';
import { ServiceItem } from 'app/components/ServiceItem';
import { ServiceModel } from 'app/models/ServiceModel';

interface Props {
  services: ServiceModel[];
}

export const ServicesList: FC<Props> = ({ services }) => {
  return (
    <section>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </section>
  );
};
