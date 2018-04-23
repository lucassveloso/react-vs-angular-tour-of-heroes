import styled, { css } from 'styled-components';
import { theme } from '../../utils/styles';

export default styled.button`
  margin-bottom: 12px;
  font-size: ${theme.font.tiny};
  font-family: Arial;
  background-color: ${theme.colors.gallery};
  border: 1px solid transparent;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.geyser};
  }

  ${({ outline }) => outline && css`
    background-color: white;
    border: 1px solid ${theme.colors.geyser};

    &:hover {
      background-color: ${theme.colors.geyser};
    }
  `}
`;
