import Data from '../../../models/data';

const getNext = (data, before) => {
  return Data.query()
    .where('id', before ? '<' : '>', data.id)
    .where('stat_id', data.stat_id)
    .first();
};

export default async (_, { input }) => {
  if (!input) return null;
  let { before, after } = input;

  let data = await Data.query().findById(before || after);

  let result = await getNext(data, before);
  if (!result) return null;

  return {
    id: result.id,
    ...JSON.parse(result.value),
    date: result.date(result.updated_at),
  };
};
