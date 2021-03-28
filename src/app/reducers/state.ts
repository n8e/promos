import { ServiceModel } from 'app/models';

export interface RootState {
  services: RootState.ServiceState;
  router?: any;
}

export namespace RootState {
  export type ServiceState = ServiceModel[];
}
