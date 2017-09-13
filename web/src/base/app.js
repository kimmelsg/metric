import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from '../views/board';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:board" component={Board} />
    </Switch>
  </BrowserRouter>
);
