import type { KeyboardEvent, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

interface RadioProps {
  className: string;
  style: object;
  radioName: string;
  value: string;
  checked: boolean;
  children?: ReactNode;
  handleChange: () => void;
}

export function Radio({
  className,
  style,
  radioName,
  value,
  checked,
  children = '',
  handleChange,
}: RadioProps) {
  const id = uuid();

  function handleEnterDown(event: KeyboardEvent<HTMLLabelElement>) {
    if (event.key === 'Enter') {
      handleChange();
    }
  }

  return (
    <li>
      <input
        className="hidden"
        type="radio"
        id={id}
        name={radioName}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label
        className={className}
        style={style}
        htmlFor={id}
        tabIndex={0}
        onKeyDown={handleEnterDown}
      >
        {children}
      </label>
    </li>
  );
}
