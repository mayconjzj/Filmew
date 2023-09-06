export type MainNavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export type MainNavType = {
  items: MainNavItem[];
}