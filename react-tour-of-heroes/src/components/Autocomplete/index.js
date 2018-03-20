import React from 'react';
import styled from 'styled-components';
import { debounce } from '../../utils';

const Input = styled.input``;

const Wrapper = styled.div`
  position: relative;
`;

const Autocomplete = ({ onChange, options }) => (
  <Wrapper>
    <input onChange={debounce(onChange, 300)} />
  </Wrapper>
);

export default Autocomplete;
