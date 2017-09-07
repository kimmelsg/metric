import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

export default ({ chart = {} }) => (
  <div className="chart">
    <VictoryChart
      width={chart.width || 400}
      domainPadding={{ x: [10, -10], y: 5 }}
    >
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryLine
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
          { x: 6, y: 2 },
          { x: 7, y: 3 },
          { x: 8, y: 5 },
          { x: 9, y: 4 },
          { x: 10, y: 7 },
          { x: 11, y: 7 },
          { x: 12, y: 7 },
          { x: 13, y: 7 },
        ]}
      />
    </VictoryChart>
  </div>
);
