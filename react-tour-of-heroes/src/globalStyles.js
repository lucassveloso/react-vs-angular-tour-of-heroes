import 'sanitize.css/sanitize.css';
import { injectGlobal } from 'styled-components';
import { theme } from './utils/styles';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    color: ${theme.colors.gray};
    font-family: ${theme.font.default};
  }
`;
