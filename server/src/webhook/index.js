import moment from 'moment';
import pubsub from '../pubsub';
import getStat from './get-stat';
import Data from '../models/data';

export default async (req, res) => {
  let { stat, shouldInsert } = await getStat(req);

  let data;
  if (shouldInsert)
    data = await Data.query().insert({
      stat_id: stat.id,
      value: JSON.stringify(req.body),
    });
  else {
    await Data.query()
      .update({ value: JSON.stringify(req.body) })
      .where('stat_id', stat.id)
      .orderBy('id', 'DESC')
      .first();
    data = await Data.query()
      .where('stat_id', stat.id)
      .orderBy('id', 'DESC')
      .first();
  }

  pubsub.publish('newData', {
    ...req.body,
    id: data.id,
    stat_id: data.stat_id,
    date: moment().format('MMM Do h:mm a'),
  });

  res.status(shouldInsert ? 201 : 200).send({ success: true });
};
