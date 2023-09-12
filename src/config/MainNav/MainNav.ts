import { MainNavType } from '@/models';

export const MainNavConfig: MainNavType = {
  items: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Populares',
      href: '/popularity?language=pt'
    },
    {
      title: 'Recomandados',
      href: '/recommended'
    },
    {
      title: 'Lançamentos',
      href: '/releases'
    }
  ]
};
