import { takeLatest, all } from 'redux-saga/effects';
import Interventions from '../reducers/interventions';
import * as types from '../types';


function* getInterventions(action) {
  // TODO: retrieve interventions from API
  const {data: interventions} = yield Interventions()
  yield put(actions.getInterventions(interventions))
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INTERVENTIONS, getInterventions)
  ])
}
