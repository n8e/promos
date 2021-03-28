import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { ServiceModel } from 'app/models';

export namespace ServiceActions {
  export enum Type {
    SEARCH_SERVICE = 'SEARCH_SERVICE'
  }

  export const searchService = createAction<PartialPick<ServiceModel, 'title'>>(Type.SEARCH_SERVICE);
}

export type ServiceActions = Omit<typeof ServiceActions, 'Type'>;
export const useServiceActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ServiceActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ServiceActions;
};
