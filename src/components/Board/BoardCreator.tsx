import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../store/boardsSlice';
import { Input } from '../UI/forms/Input';
import { HiOutlineCursorArrowRays } from 'react-icons/hi2';

export function BoardCreator() {
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();

  function handleCreateBoard(title: string) {
    dispatch(createBoard({ title }));
  }

  return (
    <li className="rounded-lg  bg-[#F1F2F4] shadow-xl overflow-hidden">
      {!isCreating && (
        <div
          className="h-full flex flex-col justify-center items-center gap-3 p-5 cursor-pointer"
          onClick={() => setIsCreating(true)}
        >
          <div className="text-4xl text-zinc-500">
            <HiOutlineCursorArrowRays />
          </div>
          <p className="italic text-zinc-500 text-center">
            Click here to create a new board
          </p>
        </div>
      )}

      {isCreating && (
        <Input
          className="border-b-2 border-blue-900 font-medium text-lg text-center text-blue-900 uppercase"
          containerClassName="h-full flex flex-col justify-center items-center gap-4 p-5"
          buttonTitle="Create"
          onSubmit={handleCreateBoard}
          onClose={() => setIsCreating(false)}
        />
      )}
    </li>
  );
}
