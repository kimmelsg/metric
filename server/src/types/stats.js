export default `
  type Stat {
    id: Int!
    title: String
    type: StatType
    style: StatStyle
  }

  enum StatType {
    count
    line
  }

  type StatStyle {
    gridArea: String
  }
`;
