import { useMenuContext } from '../../hooks/useMenuContext';
import { useBoardContext } from '../../hooks/useBoardContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
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
    >
      {BGColors.map((color) => (
        <Radio
          className="w-full block p-[2px] rounded-md hover:bg-zinc-200 active:bg-blue-200 cursor-pointer disabled:cursor-no-drop disabled:active:bg-zinc-200"
          style={color === currentColor ? { backgroundColor: '#2563eb' } : {}}
          key={color}
          radioName={radioName}
          value={color}
          checked={color === currentColor}
          handleChange={() =>
            dispatch(updateBoardBGColor({ id: boardId, color }))
          }
        >
          <div
            className="w-full aspect-square rounded-md"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </Radio>
      ))}
    </ul>,
    document.body
  );
}
