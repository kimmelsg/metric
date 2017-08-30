import './app.css';
import React from 'react';
import Card from '../card';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card data={{ title: 'First Revenue', type: 'count' }} />
        <Card data={{ title: 'Revenue', type: 'count' }} />
        <Card data={{ title: 'Revenue', type: 'count' }} />
        <Card data={{ title: 'Revenue', type: 'count' }} />
        <Card data={{ title: 'Revenue', type: 'count' }} />
        <Card
          data={{ title: 'Revenue', type: 'line', chart: { width: 900 } }}
          gridColumn="1 / 3"
          gridRow="1 / 4"
        />
      </div>
    );
  }
}
