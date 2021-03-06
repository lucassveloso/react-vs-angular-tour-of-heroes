import React from 'react';
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

const Messages = ({ onClear, messages }) => (
  <Wrapper>
    <SubTitleStyled>Messages</SubTitleStyled>
    <Button onClick={onClear}>clear</Button>
    {messages.map((log, i) => (
      <Message key={i}>{log}</Message>
    ))}
  </Wrapper>
)

Messages.propTypes = {
  onClear: func.isRequired,
  messages: arrayOf(string),
};

export default Messages;
