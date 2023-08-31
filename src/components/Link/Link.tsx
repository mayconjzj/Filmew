import NextLink from 'next/link';
import { LinkProps } from '@/models';

import * as S from './styles';

export const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <>
      <NextLink href={href} {...rest} legacyBehavior>
        <S.Content>{children}</S.Content>
      </NextLink>
    </>
  );
};
