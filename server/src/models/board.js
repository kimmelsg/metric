import Card from './card';
import Objection from 'objection';

export default class Board extends Objection.Model {
  static get tableName() {
    return 'boards';
  }
}

Board.relationMappings = {
  cards: {
    relation: Objection.Model.HasManyRelation,
    modelClass: Card,
    join: {
      from: 'boards.id',
      to: 'cards.board_id',
    },
  },
};
