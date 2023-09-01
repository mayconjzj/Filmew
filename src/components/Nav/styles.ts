import styled, { css, keyframes } from 'styled-components';

export const Nav = styled.nav`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: none;
  z-index: 1;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const NavMobile = styled.nav<{ isOpenMenu: boolean }>`
  ${({ isOpenMenu, theme }) => css`
    display: none;

    @media (max-width: 600px) {
      display: flex;
      visibility: hidden;
      position: absolute;
      background-color: ${theme.colors.black2};
      padding: ${theme.box.padding};
      padding-top: 25px;
      border-radius: ${theme.border.radius};
      box-shadow: ${theme.box.shadow};
      right: 0;
      top: 0;
      width: 0;
      height: 100%;
      transition: ${theme.transition.default};

      ${isOpenMenu &&
      `
        width: 50vw;
        visibility: visible;
      `}
    }
  `}
`;
