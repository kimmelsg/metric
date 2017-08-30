import './app.css';
import React from 'react';
import Card from '../card';

const cards = [
  { title: 'First Revenue', type: 'count' },
  { title: 'Revenue', type: 'count' },
  { title: 'Revenue', type: 'count' },
  { title: 'Revenue', type: 'count' },
  { title: 'Revenue', type: 'count' },
  {
    title: 'Revenue',
    type: 'line',
    chart: { width: 900 },
  },
];
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {cards.map((data, index) => <Card key={index} data={data} />)}
      </div>
    );
  }
}
