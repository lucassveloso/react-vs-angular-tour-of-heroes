import React from 'react';
import { For } from 'react-extras';
import { func, arrayOf, string } from 'prop-types';
import styled from 'styled-components';
import SubTitle from '../../../components/SubTitle';
import Button from '../../../components/Button';
import { theme } from '../../../utils/styles';

const Wrapper = styled.div`
  margin: 20px 0;
`
const SubTitleStyled = styled(SubTitle)`
  color: ${theme.colors.red};
  font-size: ${theme.font.large};
`;

const Message = styled.span`
  display: block;
`;

const Messages = ({ onClear, logs }) => (
  <Wrapper>
    <SubTitleStyled>Messages</SubTitleStyled>
    <Button onClick={onClear}>clear</Button>
    <For of={logs} render={(log) => (
      <Message>{log}</Message>
    )} />
  </Wrapper>
)

Messages.propTypes = {
  onClear: func.isRequired,
  logs: arrayOf(string),
};

export default Messages;
