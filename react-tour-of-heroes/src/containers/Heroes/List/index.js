import React from 'react';
import styled from 'styled-components';
import { arrayOf, object, func } from 'prop-types';
import { theme } from '../../../utils/styles';
import Link from '../../../components/Link';
import Button from '../../../components/Button';

const Wrapper = styled.ul`
  margin: 0 0 32px 0;
  list-style-type: none;
  padding: 0;
  width: 240px;
`;

const Item = styled.li`
  position: relative;
  background-color: ${theme.colors.gallery};
  margin: 8px;
  height: 35px;
  border-radius: 4px;
  &:hover {
    color: ${theme.colors.lynch};
    background-color: ${theme.colors.alto};
    left: 2px;
  }
`;

const LinkStyled = styled(Link)`
  color: ${theme.colors.gray};;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
  &:hover {
    color: ${theme.colors.lynch};
  }
`;

const Badge = styled.span`
  display: inline-block;
  width: 32px;
  padding: 10px;
  margin-right: 12px;
  color: white;
  font-size: small;
  text-align: right;
  background-color: ${theme.colors.lynch};
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
    {data.map(({ id, name }) => (
      <Item key={id}>
        <LinkStyled to={`/detail/${id}`}>
          <Badge>{id}</Badge> {name}
        </LinkStyled>
        <BtnRemove onClick={() => onDelete(id)}>x</BtnRemove>
      </Item>
    ))}
  </Wrapper>
)

List.propTypes = {
  data: arrayOf(object).isRequired,
  onDelete: func.isRequired,
};

export default List;
