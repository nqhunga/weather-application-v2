import React, { Component } from 'react';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class InputField extends Component {
  constructor() {
    super();

    this.state = { cityName: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ cityName: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.props.onSubmit(this.state.cityName);
  }
  
  render() {
    return (
      <InputGroupAddon addonType="append">
        <Input onChange={e => this.onChange(e)}/>
        <Button onClick={e => this.onSubmit(e)}>Submit</Button>
      </InputGroupAddon>
    );
  }
}

export default InputField;