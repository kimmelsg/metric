import React from 'react';
import types from './types';

export default class Card extends React.Component {
  render() {
    let { data, gridColumn, gridRow } = this.props;
    return (
      <div className="block" style={{ gridColumn, gridRow }}>
        {React.createElement(types[data.type], data)}

        <div className="block-title">{data.title}</div>
      </div>
    );
  }
}
