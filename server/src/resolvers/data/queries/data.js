import Data from '../../../models/data';

const getNext = (data, before) => {
  return Data.query()
    .where('id', before ? '<' : '>', data.id)
    .where('stat_id', data.stat_id)
    .first();
};

export default async (_, { input }) => {
  if (!input) return null;
  let { before, after, stat_id } = input;

  let result;
  if (stat_id)
    result = await Data.query()
      .where('stat_id', stat_id)
      .orderBy('id', 'DESC')
      .first();
  else {
    let data = await Data.query().findById(before || after);

    result = await getNext(data, before);
    if (!result) return null;
  }

  let [canGoBack, canGoForward] = await Promise.all([
    getNext(result, true),
    getNext(result),
  ]);

  return {
    id: result.id,
    canGoBack: canGoBack ? true : false,
    canGoForward: canGoForward ? true : false,
    ...JSON.parse(result.value),
    date: result.date(result.updated_at),
  };
};
