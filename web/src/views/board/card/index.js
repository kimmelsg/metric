import React from 'react';
import View from './view';
import Edit from './edit';

export default class Card extends React.Component {
  constructor({ data: { gridArea } }) {
    super();
    this.state = { style: { gridArea } };
  }

  save(data) {
    this.setState({ style: data.style, edit: false });
  }

  render() {
    let { data } = this.props;
    let { style, hovering, edit } = this.state;

    return (
      <div
        className="block"
        style={style}
        onMouseEnter={() => (edit ? null : this.setState({ hovering: true }))}
        onMouseLeave={() => (edit ? null : this.setState({ hovering: false }))}
      >
        {edit ? (
          <Edit data={data} onStyleChange={style => this.setState({ style })} />
        ) : (
          <View
            data={data}
            hovering={hovering}
            triggerEdit={() => this.setState({ edit: true })}
          />
        )}
      </div>
    );
  }
}
