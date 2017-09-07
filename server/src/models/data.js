import Objection from 'objection';
import moment from 'moment';

export default class Data extends Objection.Model {
  static get tableName() {
    return 'data';
  }

  date(time) {
    let date = moment(time, 'YYYY-MM-DD HH:mm:ss');
    if (date.isSame(new Date(), 'day')) return date.format('h:mm a');
    return date.format('MMM Do h:mm a');
  }
}
