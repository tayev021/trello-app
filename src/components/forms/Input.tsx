import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface InputProps {
  className: string;
  containerClassName?: string;
  initialValue?: string;
  buttonTitle?: string;
  onSubmit: (value: string) => void;
  onClose: () => void;
}

export function Input({
  className,
  containerClassName = '',
  initialValue = '',
  buttonTitle = 'Update',
  onSubmit,
  onClose,
}: InputProps) {
  const [value, setValue] = useState(initialValue);
  const ref = useOutsideClick<HTMLFormElement>(onClose);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value.trim().length > 0) {
      onSubmit(value.trim());
      onClose();
    }
  }

  return (
    <form
      ref={ref}
      className={
        containerClassName
          ? containerClassName
          : 'min-w-[150px] grid grid-cols-[1fr_min-content] items-center gap-2'
      }
      onSubmit={handleSubmit}
    >
      <input
        className={'w-full focus:outline-0 ' + className}
        type="text"
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <button
        className="py-1 px-2 rounded-xl text-base leading-none uppercase hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] active:bg-blue-200 cursor-pointer"
        type="submit"
      >
        {buttonTitle}
      </button>
    </form>
  );
}
