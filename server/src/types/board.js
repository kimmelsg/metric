export default `
  type Board {
    name: String!
    slug: String!
    cards: [Card]
  }

  type Card {
    id: Int!
    name: String
    data: CardData
    type: CardType
    gridArea: String
  }

  type CardData {
    id: Int!
    value: String
    chart: [LineChart]
  }

  enum CardType {
    count
    line
  }

  type LineChart {
    x: Int
    y: Int
  }
`;
