import React from 'react';
import Title from './title';
import types from '../types';
import { getDataBeforeOrAfter } from '../../../../gql/mutations/data';

const Wrap = ({ children }) => children;

export class View extends React.Component {
  constructor({ card }) {
    super();
    this.state = { card, dataTop: card.data.id };
  }
  async getNext(input, id) {
    let { card, dataTop } = this.state;

    let { refetch } = this.props.data;
    let { data } = await refetch({ input });
    if (!data.data && id <= dataTop) return this.setState({ dataBottom: id });
    if (!data.data) return;
    this.setState({ card: { ...card, data: data.data } });
  }
  render() {
    let { card, dataTop, dataBottom } = this.state;
    let { hovering, triggerEdit } = this.props;

    return (
      <Wrap>
        <div className="block-actions">
          {hovering ? (
            <i
              className="block-edit fa fa-arrows-alt drag"
              aria-hidden="true"
              onClick={triggerEdit}
            />
          ) : null}
        </div>
        <div className="block-container">
          {React.createElement(types[card.type], card)}

          <div className="block-display">
            <Title
              card={card}
              hovering={hovering}
              dataTop={dataTop}
              dataBottom={dataBottom}
              getBefore={before => this.getNext({ before }, before)}
              getAfter={after => this.getNext({ after }, after)}
            />
            <div className="block-title">{card.data.date}</div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default getDataBeforeOrAfter(View);
