import React from 'react';
import styled from 'styled-components';
import { For } from 'react-extras';
import { arrayOf, object, func } from 'prop-types';
import Link from '../../../components/Link';
import Button from '../../../components/Button';

const Wrapper = styled.ul`
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
`;

const Item = styled.li`
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  height: 2.2em;
  border-radius: 4px;
  &:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
`;

const LinkStyled = styled(Link)`
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
  &:hover {
    color: #607D8B;
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: 0;
  height: 2.7em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
`;

const BtnRemove = styled(Button)`
  position: relative;
  left: 194px;
  top: -30px;
  background-color: gray !important;
  color: white;
  border: none;
`;


const List = ({ data, onDelete }) => (
  <Wrapper>
    <For of={data} render={({ id, name }) => (
      <Item key={id}>
        <LinkStyled to={`/detail/${id}`}>
          <Badge>{id}</Badge> {name}
        </LinkStyled>
        <BtnRemove onClick={() => onDelete(id)}>x</BtnRemove>
      </Item>
    )} />
  </Wrapper>
)

List.propTypes = {
  data: arrayOf(object).isRequired,
  onDelete: func.isRequired,
};

export default List;
