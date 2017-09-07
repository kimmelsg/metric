import React from 'react';
import Card from './card';
import BoardQuery from '../../gql/queries/board';

export class Board extends React.Component {
  render() {
    let { board } = this.props.data;
    if (!board) return null;

    return (
      <div className="board">
        {board.cards.map(card => <Card key={card.id} card={{ ...card }} />)}
      </div>
    );
  }
}

export default BoardQuery(Board);
