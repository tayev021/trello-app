import type { ReactNode } from 'react';
import { v4 as uuid } from 'uuid';

interface RadioProps {
  className: string;
  style: object;
  radioName: string;
  value: string;
  checked: boolean;
  children?: ReactNode;
  handleChange: (_: any) => void;
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
      <label className={className} style={style} htmlFor={id}>
        {children}
      </label>
    </li>
  );
}
