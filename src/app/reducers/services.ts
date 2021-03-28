import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ServiceActions } from 'app/actions/services';
import { ServiceModel } from 'app/models';

const initialState: RootState.ServiceState = [
  {
    id: 1,
    title: 'Siteconstructor.io',
    description: 'Description',
    promocode: 'itpromocodes'
  },
  {
    id: 2,
    title: 'Appvision.com',
    description: 'Description',
    promocode: 'itpromocodes'
  },
  {
    id: 3,
    title: 'Analytics.com',
    description: 'Description',
    promocode: 'itpromocodes'
  },
  {
    id: 4,
    title: 'Logotype',
    description: 'Description',
    promocode: 'itpromocodes'
  }
];

export const serviceReducer = handleActions<RootState.ServiceState, ServiceModel>(
  {
    [ServiceActions.Type.SEARCH_SERVICE]: (state, action) => {
      return state.filter((service) => {
        return service
          .title
          .toLocaleLowerCase()
          .includes(action.payload.title.toLocaleLowerCase());
      });
    }
  },
  initialState
);
