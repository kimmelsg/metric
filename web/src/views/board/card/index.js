import React from 'react';
import View from './view';
import Edit from './edit';

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = { style: {} };
  }

  save(data) {
    this.setState({ style: data.style, edit: false });
  }

  render() {
    let { data } = this.props;
    let { style, hovering, edit } = this.state;
    data.style = { ...data.style, ...style };

    return (
      <div
        className="block"
        style={data.style}
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
