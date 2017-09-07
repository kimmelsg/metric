import React from 'react';
import View from './view';
import Edit from './edit';

export default class Card extends React.Component {
  constructor({ card: { gridArea } }) {
    super();
    this.state = { style: { gridArea } };
  }

  save(card) {
    this.setState({ style: card.style, edit: false });
  }

  render() {
    let { card } = this.props;
    let { style, hovering, edit } = this.state;

    return (
      <div
        className="block"
        style={style}
        onMouseEnter={() => (edit ? null : this.setState({ hovering: true }))}
        onMouseLeave={() => (edit ? null : this.setState({ hovering: false }))}
      >
        {edit ? (
          <Edit card={card} onStyleChange={style => this.setState({ style })} />
        ) : (
          <View
            card={card}
            hovering={hovering}
            triggerEdit={() => this.setState({ edit: true })}
          />
        )}
      </div>
    );
  }
}
