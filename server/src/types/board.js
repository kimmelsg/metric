export default `
  type Board {
    name: String!
    slug: String!
    cards: [Card]
  }


  type Card {
    id: Int!
    stat_id: Int!
    name: String
    data: CardData
    type: CardType
    gridArea: String
  }

  type CardData {
    id: Int!
    canGoBack: Boolean
    canGoForward: Boolean
    date: String!
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


  input CardDataInput {
    stat_id: Int
    before: Int
    after: Int
  }
`;
