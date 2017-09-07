import Objection from 'objection';
import moment from 'moment';

export default class Stat extends Objection.Model {
  static get tableName() {
    return 'stats';
  }
}
