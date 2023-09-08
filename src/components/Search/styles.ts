import styled from 'styled-components';

import theme from '@/styles/theme';

export const Search = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  width: 220px;
  justify-content: space-around;
`;

export const Icon = styled.button`
  font-size: 20px;
  display: flex;
  background-color: transparent;
  border: none;
  color: ${theme.colors.white};
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  height: 40px;
  color: ${theme.colors.white};
`;
