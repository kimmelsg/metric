import Objection from 'objection';

export default class Data extends Objection.Model {
  static get tableName() {
    return 'data';
  }
}
