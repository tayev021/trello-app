import { useState, type ReactElement } from 'react';
import type { IPosition } from '../../types/IPosition';
import { MenuContext } from '../../context/MenuContext';
import { Button } from './Button';
import { List } from './List';
import { Toggler } from './Toggler';

interface MenuProps {
  children: ReactElement;
}

export function Menu({ children }: MenuProps) {
  const [menuId, setMenuId] = useState<string>('');
  const [position, setPosition] = useState<IPosition | null>(null);

  const open = setMenuId;
  const close = () => setMenuId('');

  return (
    <MenuContext.Provider
      value={{ menuId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

Menu.Toggler = Toggler;
Menu.List = List;
Menu.Button = Button;
