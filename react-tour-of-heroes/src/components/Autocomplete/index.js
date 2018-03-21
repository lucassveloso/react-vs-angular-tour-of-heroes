import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { For } from 'react-extras';
import { debounce } from '../../utils';
import { theme } from '../../utils/styles';
import Link from '../Link';
import Input from '../Input';

const Wrapper = styled.div`
  position: relative;
  ul {
    display: none;
  }
  &:hover {
    ul {
      display: inline;
    }
  }
`;

const Item = styled.li`
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 204px;
  height: 28px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
  &:hover {
    background-color: ${theme.colors.lynch};
  }
`;

const LinkStyled = styled(Link)`
  color: ${theme.colors.gray};
  display: block;
  text-decoration: none;
  &:hover, &:active {
    color: white;
  }
`

const Autocomplete = ({ onChange, data }) => (
  <Wrapper>
    <Input onChange={debounce(onChange, 300)} />
    <ul>
      <For of={data} render={({ id, name }) => (
        <Item key={id}>
          <LinkStyled to={`/detail/${id}`}>
            {name}
          </LinkStyled>
        </Item>
      )} />
    </ul>
  </Wrapper>
);

Autocomplete.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Autocomplete;
