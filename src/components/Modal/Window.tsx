import { cloneElement, type ReactElement } from 'react';
import { useModalContext } from '../../hooks/useModalContext';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { HiXMark } from 'react-icons/hi2';

interface ChildProps {
  onClose: () => void;
}

interface WindowProps {
  children: ReactElement<ChildProps>;
  name: string;
}

export function Window({ children, name }: WindowProps) {
  const { windowName, close } = useModalContext();
  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== windowName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(200,200,200,0.4)] backdrop-blur-xs transition-all duration-300 z-50">
      <div
        className="fixed top-[50%] left-[50%] -translate-1/2 py-10 px-12 rounded-2xl bg-[#FFFFFF] shadow-[0_4px_8px_rgba(80,80,80,0.5)] transition-all duration-300"
        ref={ref}
      >
        <button
          className="absolute top-3 right-3 p-1 rounded-4xl text-xl hover:bg-zinc-200 hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] transition-all duration-100 cursor-pointer"
          onClick={close}
        >
          <HiXMark />
        </button>

        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body
  );
}
