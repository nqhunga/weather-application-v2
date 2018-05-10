import React, {Component} from 'react';
import styled from 'styled-components';

const ItemSuggest = styled.li`
  list-style: none;
  font-size: 17px;
  line-height: 25px;
  padding-left: 5px;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
    background-color: #537fc6;
    color: #e4d7e8 !important;
  }
`;
class SuggestItem extends Component {
  handleClick = () => {
    this.props.onClickSuggest(this.props.data);
  }
  render() {
    return (
      <ItemSuggest onClick={this.handleClick}>{this.props.data.name}</ItemSuggest>
    );
  }
}

export default SuggestItem;