import React from 'react';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="block">
          <div className="title">First Revenue</div>
        </div>
        <div className="block">
          <div className="title">Revenue</div>
        </div>
        <div className="block">
          <div className="title">Revenue</div>
        </div>

        <div className="block">
          <div className="title">Revenue</div>
        </div>
        <div className="block">
          <div className="title">Revenue</div>
        </div>
        <div
          className="block"
          style={{ gridColumn: '1 / 3', gridRow: '1 / 4' }}
        >
          <div className="title">Revenue</div>
        </div>
      </div>
    );
  }
}
