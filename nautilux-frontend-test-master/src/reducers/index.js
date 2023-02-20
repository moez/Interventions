import { combineReducers } from 'redux';
import * as types from '../types';
import Interventions from "./interventions";


export const interventions = (state = [], action) => {
  switch (action) {
    case types.GET_INTERVENTIONS:
      return {
        ...state,
        interventions: action.payload
      };
      
    default:
      return state
  }
}

export default () => combineReducers({
  interventions: Interventions,
});
