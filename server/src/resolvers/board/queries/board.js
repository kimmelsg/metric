import Board from '../../../models/board';

export default async (_, { slug }) => {
  let board = await Board.query()
    .where({ slug })
    .first();
  console.log(board, 'wtf');

  return {
    cards: [
      { title: 'First Revenue', type: 'count' },
      { title: 'Revenue', type: 'count' },
      { title: 'Revenue', type: 'count' },
      { title: 'Revenue', type: 'count' },
      { title: 'Revenue', type: 'count' },
      {
        title: 'Revenue',
        type: 'line',
        style: { gridArea: '2 / 3 / 4 / 1' },
      },
    ],
  };
};
