import styled, { css } from 'styled-components';

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
  ${({ isOpenMenu }) => css`
    display: none;

    @media (max-width: 600px) {
      display: flex;
      visibility: ${isOpenMenu ? 'visible' : 'hidden'};
      overflow: ${isOpenMenu ? 'auto' : 'hidden'};
      position: absolute;
      background-color: #090909;
      padding: 10px;
      padding-top: 25px;
      border-radius: 10px;
      right: 0;
      top: 0;
      width: 50vw;
      height: 100%;
    }
  `}
`;

export const ListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
`;
