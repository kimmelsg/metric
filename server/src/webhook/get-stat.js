import moment from 'moment';
import Stat from '../models/stat';
import Data from '../models/data';

const times = {
  hourly: [1, 'h'],
  daily: [1, 'd'],
  weekly: [1, 'w'],
  monthly: [1, 'M'],
};

export default async req => {
  let { frequency } = req.body;

  let stat = await Stat.query()
    .where(req.params)
    .first();

  //update frequency if changed
  if (stat && frequency && stat.frequency !== frequency)
    stat = await Stat.query().updateAndFetchById(stat.id, {
      frequency,
    });

  // create a new stat if this is the first time
  if (!stat)
    stat = await Stat.query().insert({
      ...req.params,
      frequency: req.body.frequency,
    });

  let data = await Data.query()
    .where('stat_id', stat.id)
    .first();

  let shouldInsert = false;
  if (!data) shouldInsert = true;

  //check if we need to update or insert a new row into the data table
  if (
    data &&
    moment(data.created_at, 'YYYY-MM-DD')
      .add(...times[stat.frequency])
      .isSameOrBefore(new Date(), 'day')
  )
    shouldInsert = true;

  return { stat, shouldInsert };
};
