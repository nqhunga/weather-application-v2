import React, { Component } from 'react';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, Input, Button, Alert } from 'reactstrap';
import checkPlace from '../../GetApi/SearchData';
import SuggestItem from './SuggestItem';

const InputWrapper = styled(InputGroupAddon) `
  display: flex;
  flex-direction: column;
`;

const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const GetSuggestWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SuggestWrapper = styled.ul`
  background-color: white;
  position: absolute;
  padding: 0;
  width: 100%;
  border: 1px solid #17a2b8;
  border-top: none;
  z-index: 100;
`;

const AlertEx = styled(Alert)`

`;
class InputField extends Component {
  constructor() {
    super();

    this.state = {
      cityName: '',
      cityList: [],
      render: false,
      location: {
        lat: '',
        lon: ''
      },
      noFound: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.persist();
    this.setState({ cityName: e.target.value });
    checkPlace(e.target.value).then(data => {
      if (data.length !== 0) {
        this.setState({
          cityList: data,
          render: true,
          noFound: ''
        });
      } else { this.setState({ noFound: 'No Found Matched!', render: false, cityList: [] }); }
    });
  }

async onSubmit(e) {
  e.preventDefault();
  await this.props.onSubmit(this.state.cityName);
}

handleSuggest(value) {
  this.setState({
    cityName: value.name,
    location: {
      lat: value.lat,
      lon: value.lon
    },
    render: false
  })
}

render() {
  return (
    <InputWrapper addonType="append">
      <SubmitWrapper className={this.state.render ? 'suggest' : ''}>
        <Input invalid={this.state.noFound ? true : false} onChange={e => this.onChange(e)} value={this.state.cityName} />
        <Button onClick={e => this.onSubmit(e)}>Submit</Button>
      </SubmitWrapper>
      <GetSuggestWrapper>
        {this.state.render ?
          <SuggestWrapper className="suggestWrapper">
            {this.state.cityList.map((value) => {
              return <SuggestItem key={value.id} data={value} onClickSuggest={value => this.handleSuggest(value)} />
            })}
          </SuggestWrapper> : ''
        }
      </GetSuggestWrapper>
    </InputWrapper>
  );
}
}

export default InputField;