import Objection from 'objection';

export default class Card extends Objection.Model {
  static get tableName() {
    return 'cards';
  }
}
