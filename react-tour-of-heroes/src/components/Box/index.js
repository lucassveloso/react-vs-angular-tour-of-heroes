import styled, { css } from 'styled-components';
import { oneOf, string } from 'prop-types';

const Box = styled.div`
  display: ${({ displayType }) => displayType};
  text-align: ${({ textAlign }) => textAlign};

  ${({ displayType }) => displayType === 'block' && css`
    width: 100%;
  `}

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
`;

Box.propTypes = {
  displayType: string,
  textAlign: oneOf(['left', 'center', 'right']),
  alignItems: string,
  justifyContent: string,
}

Box.defaultProps = {
  displayType: 'block',
  textAlign: 'left',
};

export default Box;
