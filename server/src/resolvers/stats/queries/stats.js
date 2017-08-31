export default (_, { boardId }) => {
  console.log(boardId);

  return [
    { title: 'First Revenue', type: 'count' },
    { title: 'Revenue', type: 'count' },
    { title: 'Revenue', type: 'count' },
    { title: 'Revenue', type: 'count' },
    { title: 'Revenue', type: 'count' },
    {
      title: 'Revenue',
      type: 'line',
      style: { gridRow: '2 / 5' },
    },
  ];
};
