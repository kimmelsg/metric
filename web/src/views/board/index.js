import React from 'react';
import Card from './card';
import BoardQuery from '../../gql/queries/board';

export class Board extends React.Component {
  render() {
    let { board } = this.props.data;
    if (!board) return null;
    console.log(board);
    return (
      <div className="board">
        {board.cards.map(data => <Card key={data.id} data={{ ...data }} />)}
      </div>
    );
  }
}

export default BoardQuery(Board);
