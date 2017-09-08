import React from 'react';
import Form from 'react-validify';
import Input from '../../../shared/input';

export default class Edit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { style, onStyleChange } = this.props;
    return (
      <div className="block" style={style}>
        <div className="block-editor">
          <Form values={style} onValues={onStyleChange}>
            <Input type="text" placeholder="Grid Area" name="gridArea" />
          </Form>
        </div>
      </div>
    );
  }
}
