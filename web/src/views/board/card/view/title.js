import React from 'react';

export default ({
  dataTop,
  canGoBack,
  canGoForward,
  card,
  data,
  getBefore,
  getAfter,
  hovering,
}) => (
  <div className="block-title">
    {data.canGoBack && hovering ? (
      <i
        className="fa fa-arrow-left clickable"
        onClick={() => getBefore(data.id)}
      />
    ) : null}
    <span>{card.name}</span>
    {data.canGoForward && hovering ? (
      <i
        className="fa fa-arrow-right clickable"
        onClick={() => getAfter(data.id)}
      />
    ) : null}
  </div>
);
