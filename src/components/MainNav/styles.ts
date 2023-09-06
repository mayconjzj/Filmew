import styled, { css } from 'styled-components';

import theme from '@/styles/theme';

export const Nav = styled.nav`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 15px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const NavMobile = styled.nav<{ isOpenMenu: boolean }>`
  ${({ isOpenMenu }) => css`
    display: none;
    z-index: 1;

    @media (max-width: 600px) {
      display: flex;
      visibility: hidden;
      overflow-x: hidden;
      position: fixed;
      background-color: ${theme.colors.black2};
      padding: ${theme.box.padding};
      padding-top: 25px;
      padding-bottom: 25px;
      border-radius: ${theme.border.radius};
      box-shadow: ${theme.box.shadow};
      right: 0;
      top: 0;
      width: 0;
      opacity: 0;
      height: 100vh;
      transition: ${theme.transition.default};

      ${isOpenMenu &&
      `
      width: 50%;
      visibility: visible;
      overflow-x; auto;
      opacity: 1;
    `}
    }
  `}
`;
