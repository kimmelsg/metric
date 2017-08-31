import React from 'react';
import Card from '../card';
import StatsQuery from '../gql/queries/stats';

export class App extends React.Component {
  render() {
    let { stats } = this.props.data;
    if (!stats) return null;

    return (
      <div className="App">
        {stats.map((data, index) => <Card key={index} data={{ ...data }} />)}
      </div>
    );
  }
}

export default StatsQuery(App);
