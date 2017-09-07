import Board from '../../../models/board';

export default async (_, { slug }) => {
  let board = await Board.query()
    .where({ slug })
    .first()
    .eager('[cards.[data(latestData)]]', {
      latestData: query => {
        query.orderBy('id', 'DESC');
      },
    });

  let cards = board.cards.map(card => ({
    ...card,
    data: { ...JSON.parse(card.data.value), id: card.data.id },
  }));

  return { ...board, cards };
};
