import styled from 'styled-components';

import theme from '@/styles/theme';

export const NotFound = styled.div`
  color: ${theme.colors.red};
  font-weight: 200;
`;

export const Container = styled.article`
  background-color: ${theme.colors.black2};
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  font-size: 1rem;
  position: relative;
`;

export const PosterPath = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Overview = styled.p`
  text-align: justify;
`;

export const Info = styled.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Content = styled.article`
  width: calc(100vw - 335px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GoBack = styled.a`
  transition: ${theme.transition.fast};
  position: absolute;
  right: 0;
  bottom: 0;
  padding: ${theme.box.padding};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.yellow};
  }
`;
