import React from 'react';
import Title from './title';
import types from '../types';
import { getData } from '../../../../gql/queries/data';

export class View extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async getNext(input) {
    let { refetch } = this.props.data;
    refetch({ input });
  }

  componentWillMount() {
    this.props.subscribeToData(this.props.card.stat_id);
  }

  render() {
    let { hovering } = this.state;
    let { data } = this.props.data;
    let { card, triggerEdit, style } = this.props;
    if (!data) return null;

    return (
      <div
        className="block"
        style={style}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
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
          {React.createElement(types[card.type], data)}

          <div className="block-display">
            <Title
              card={card}
              data={data}
              hovering={hovering}
              getBefore={before => this.getNext({ before })}
              getAfter={after => this.getNext({ after })}
            />
            <div className="block-title">{data.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default getData(View);
