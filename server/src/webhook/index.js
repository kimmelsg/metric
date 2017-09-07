import getStat from './get-stat';
import Data from '../models/data';

export default async (req, res) => {
  let { stat, shouldInsert } = await getStat(req);

  if (shouldInsert)
    await Data.query().insert({
      stat_id: stat.id,
      value: JSON.stringify(req.body),
    });
  else
    await Data.query()
      .update({ value: JSON.stringify(req.body) })
      .where('stat_id', stat.id)
      .orderBy('id', 'DESC')
      .first();

  res.status(shouldInsert ? 201 : 200).send({ success: true });
};
