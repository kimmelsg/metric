import React from 'react';
import types from './types';

export default ({ data, hovering, triggerEdit }) => [
  <div key={data.title} className="block-actions">
    {hovering ? (
      <i className="block-edit fa fa-arrows-alt drag" aria-hidden="true" />
    ) : (
      <i className="block-edit fa fa-arrows-alt drag" aria-hidden="true" />
    )}
  </div>,
  <div key={data.title + 'container'} className="block-container">
    {React.createElement(types[data.type], data)}

    <div className="block-title">{data.title}</div>
  </div>,
];
