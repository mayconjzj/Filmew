export type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export type NavType = {
  items: NavItem[];
}