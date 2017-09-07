export default `
  type Board {
    cards: [Card]
  }

  type Card {
    id: Int!
    title: String
    type: CardType
    style: CardStyle
  }

  enum CardType {
    count
    line
  }

  type CardStyle {
    gridArea: String
  }
`;
