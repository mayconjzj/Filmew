import styled from 'styled-components';

export const Nav = styled.nav`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;