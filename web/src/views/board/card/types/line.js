import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

export default class Line extends React.Component {
  constructor() {
    super();
    this.state = { width: 450, height: 400 };
  }

  componentDidMount() {
    this.setState({
      width: this.chart.offsetWidth,
      height: this.chart.offsetHeight,
    });
  }

  render() {
    let { height, width } = this.state;
    let { data: { chart = {} } } = this.props;
    return (
      <div className="chart" ref={chart => (this.chart = chart)}>
        <VictoryChart width={width} height={height} domainPadding={{ y: 20 }}>
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 18 },
              axis: { stroke: '#FFFFFF' },
              tickLabels: { fill: '#FFFFFF' },
            }}
          />
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 18 },
              axis: { stroke: '#FFFFFF' },
              tickLabels: { fill: '#FFFFFF' },
            }}
            dependentAxis
          />
          <VictoryLine
            style={{
              data: { stroke: '#FFFFFF' },
              parent: { border: '1px solid #ccc' },
            }}
            data={chart}
          />
        </VictoryChart>
      </div>
    );
  }
}
