import React from 'react';
import Form from 'react-validify';
import Input from '../../../shared/input';

export default class Edit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { data, onStyleChange } = this.props;
    return (
      <div className="block-editor">
        <Form values={data.style} onValues={onStyleChange}>
          <Input type="text" placeholder="Grid Column" name="gridColumn" />
          <Input type="text" placeholder="Grid Row" name="gridRow" />
        </Form>
      </div>
    );
  }
}
