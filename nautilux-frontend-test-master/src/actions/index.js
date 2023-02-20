import * as types from '../types';

export const getInterventions = (interventions) => ({
  type: types.GET_INTERVENTIONS,
  payload:  {interventions}
});

