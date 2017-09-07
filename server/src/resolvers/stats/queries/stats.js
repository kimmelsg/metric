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
      style: { gridArea: '2 / 3 / 4 / 1' },
    },
  ];
};
