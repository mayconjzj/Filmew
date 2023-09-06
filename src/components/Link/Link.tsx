import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { LinkProps } from '@/models';

import * as S from './styles';

export const Link = ({ children, href, ...rest }: LinkProps) => {
  const { asPath } = useRouter();
  const isActive = href === asPath;

  return (
    <>
      <NextLink href={href} {...rest} legacyBehavior>
        <S.Content isActive={isActive}>{children}</S.Content>
      </NextLink>
    </>
  );
};
