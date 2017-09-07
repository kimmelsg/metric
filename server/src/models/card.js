import Objection from 'objection';
import Data from './data';

export default class Card extends Objection.Model {
  static get tableName() {
    return 'cards';
  }
}

Card.relationMappings = {
  data: {
    relation: Objection.Model.HasOneRelation,
    modelClass: Data,
    join: {
      from: 'data.stat_id',
      to: 'cards.stat_id',
    },
  },
};
