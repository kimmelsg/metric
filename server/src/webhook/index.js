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
      .limit(1);
    data = await Data.query()
      .where('stat_id', stat.id)
      .orderBy('id', 'DESC')
      .first();
  }

  let canGoBack = true;

  if (!shouldInsert) {
    let amount = await Data.query()
      .where('stat_id', stat.id)
      .limit(2);
    if (amount.length !== 2) canGoBack = false;
  }

  pubsub.publish('newData', {
    ...req.body,
    id: data.id,
    canGoBack,
    canGoForward: false,
    stat_id: data.stat_id,
    date: moment().format('h:mm'),
  });

  res.status(shouldInsert ? 201 : 200).send({ success: true });
};
