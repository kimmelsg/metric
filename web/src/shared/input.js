import React from 'react';

export default ({ error, ...props }) => [
  error,
  <input key={props.name} {...props} className="input" />,
];
