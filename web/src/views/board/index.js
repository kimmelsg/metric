import React from 'react';
import Card from './card';
import BoardQuery from '../../gql/queries/board';

export class Board extends React.Component {
  render() {
    console.log(this.props.data);
    let { board } = this.props.data;
    if (!board) return null;

    return (
      <div className="board">
        {board.cards.map((data, index) => (
          <Card key={index} data={{ ...data }} />
        ))}
      </div>
    );
  }
}

export default BoardQuery(Board);
