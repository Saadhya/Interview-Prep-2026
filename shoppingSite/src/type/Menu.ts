export interface MenuItem {
  name?: string;
  link?: string;
}

export interface DropdownMenuProps {
  menuTitle?: string;
  menusList?: MenuItem[];
}
