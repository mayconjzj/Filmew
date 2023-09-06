import styled from 'styled-components';

import theme from '@/styles/theme';

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  height: 40px;
  border: 1px solid white;
  border-radius: 5px;
  width: 220px;
  justify-content: space-around;
`;

export const Icon = styled.label`
  font-size: 20px;
  display: flex;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${theme.colors.white};
`;
