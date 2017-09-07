import React from 'react';
import types from './types';

const Wrap = ({ children }) => children;

export default ({ data, hovering, triggerEdit }) => (
  <Wrap>
    <div className="block-actions">
      {hovering ? (
        <i
          className="block-edit fa fa-arrows-alt drag"
          aria-hidden="true"
          onClick={triggerEdit}
        />
      ) : null}
    </div>
    <div className="block-container">
      {React.createElement(types[data.type], data)}

      <div className="block-title">{data.name}</div>
    </div>
  </Wrap>
);
