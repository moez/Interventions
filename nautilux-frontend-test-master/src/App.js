import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import configureStore, { sagaMiddleware } from './store';
import rootSaga from './sagas';

import Header from './components/Header';
import InterventionsList from './containers/InterventionsList';
import InterventionsView from './containers/InterventionsView';
import InterventionsAdd from './containers/InterventionsAdd';

const store = configureStore();
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact>
              <InterventionsList />
            </Route>
            <Route path="/intervention/:id" exact>
              <InterventionsView />
            </Route>
            <Route path="/create" exact>
              <InterventionsAdd />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
