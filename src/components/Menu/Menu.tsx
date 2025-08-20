import type { IPosition } from '../../types/IPosition';
import { useState, type ReactElement } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Toggler } from './Toggler';
import { List } from './List';
import { ColorsList } from './ColorsList';
import { Button } from './Button';

interface MenuProps {
  children: ReactElement;
}

export function Menu({ children }: MenuProps) {
  const [menuId, setMenuId] = useState<string>('');
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

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
Menu.ColorsList = ColorsList;
Menu.Button = Button;
