import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.header`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: ${theme.box.padding};
  position: sticky;
  background-color: ${theme.colors.black};
  width: 100vw;
  top: 0;
  z-index: 1;
`;
