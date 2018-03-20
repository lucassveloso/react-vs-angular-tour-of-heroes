import styled, { css } from 'styled-components';

const Box = styled.div`
  display: ${({ displayType }) => displayType};
  text-align: ${({ textAlign }) => textAlign};

  ${({ displayType }) => displayType === 'block' && css`
    float: left;
    width: 100%;
  `}

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
`;

Box.defaultProps = {
  displayType: 'block',
  textAlign: 'left',
};

export default Box;
