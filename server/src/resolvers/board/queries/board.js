import Board from '../../../models/board';

export default async (_, { slug }) => {
  let board = await Board.query()
    .where({ slug })
    .first()
    .eager('[cards]');

  return board;
};
