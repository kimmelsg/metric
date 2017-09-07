import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from '../views/board';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/:board" component={Board} />
      </Switch>
    </div>
  </BrowserRouter>
);
