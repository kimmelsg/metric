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
    return edit ? (
      <Edit
        card={card}
        style={style}
        onStyleChange={style => this.setState({ style })}
      />
    ) : (
      <View
        style={style}
        card={card}
        hovering={hovering}
        triggerEdit={() => this.setState({ edit: true })}
      />
    );
  }
}
