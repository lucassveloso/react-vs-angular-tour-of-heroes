import styled from 'styled-components';
import { Link as ReLink } from 'react-router-dom';
import { theme } from '../../utils/styles';

const Menu = styled.nav``;

Menu.Link = styled(ReLink)`
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  display: inline-block;
  background-color: ${theme.colors.gallery};
  color: ${theme.colors.lynch};
  border-radius: ${theme.border.radius};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colors.cerulean};
    background-color: ${theme.colors.geyser};
  }
`;

export default Menu;
