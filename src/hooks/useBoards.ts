import { useStoreSelector } from './useStoreSelector';

export function useBoards() {
  const boards = useStoreSelector((store) => store.boards.boards);

  return boards;
}
