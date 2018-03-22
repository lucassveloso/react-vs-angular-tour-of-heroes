import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const InputStyled = styled(Input)`
  width: 173px;
  height: 23px;
  margin: 0 5px;
`;

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Hero name:</label>
        <InputStyled onChange={this.handleOnChange} value={this.state.value} />
        <Button type="submit">add</Button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: func.isRequired,
};

export default Form;
