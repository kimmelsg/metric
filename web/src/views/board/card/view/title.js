import React from 'react';

export default ({
  dataTop,
  dataBottom,
  card,
  getBefore,
  getAfter,
  hovering,
}) => (
  <div className="block-title">
    {(!dataBottom || dataBottom < card.data.id) && hovering ? (
      <i
        className="fa fa-arrow-left clickable"
        onClick={() => getBefore(card.data.id)}
      />
    ) : null}
    <span>{card.name}</span>
    {dataTop !== card.data.id && hovering ? (
      <i
        className="fa fa-arrow-right clickable"
        onClick={() => getAfter(card.data.id)}
      />
    ) : null}
  </div>
);
