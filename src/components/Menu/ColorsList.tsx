import { useMenuContext } from '../../hooks/useMenuContext';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateBoardBGColor } from '../../store/boardsSlice';
import { createPortal } from 'react-dom';
import { Radio } from './Radio';
import { BGColors } from '../../types/IBGColors';

interface ColorsListProps {
  id: string;
}

export function ColorsList({ id }: ColorsListProps) {
  const { menuId, position, close } = useMenuContext();
  const {
    board: { id: boardId, bgColor: currentColor },
  } = useBoardContext();
  const ref = useOutsideClick<HTMLUListElement>(close, false);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (menuId === id) ref.current?.focus();
    },
    [menuId, id]
  );

  if (menuId !== id) return null;

  const radioName = 'board-colors-settings';
  const bodyRect = document.body.getBoundingClientRect();
  const top = `${position.y}px`;
  const left =
    position.x + 150 > bodyRect.width
      ? `${Math.round(bodyRect.width - 160)}px`
      : `${Math.round(position.x)}px`;

  return createPortal(
    <ul
      className="w-[150px] fixed grid grid-cols-[repeat(4,1fr)] gap-1 p-2 rounded-md bg-[#FFFFFF] shadow-[0_1px_3px_rgba(80,80,80,0.6)]"
      style={{ top: top, left: left }}
      ref={ref}
      tabIndex={0}
    >
      {BGColors.map((color) => (
        <Radio
          className="w-full block border-3 border-transparent rounded-md hover:bg-blue-500 active:bg-blue-200 focus:outline-2 focus:outline-blue-500 focus:-outline-offset-1 disabled:cursor-no-drop disabled:active:bg-zinc-200 cursor-pointer select-none overflow-hidden"
          style={color === currentColor ? { borderColor: '#3b82f6' } : {}}
          key={color}
          radioName={radioName}
          value={color}
          checked={color === currentColor}
          handleChange={() =>
            dispatch(updateBoardBGColor({ id: boardId, color }))
          }
        >
          <div
            className="w-full aspect-square"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </Radio>
      ))}
    </ul>,
    document.body
  );
}
