import type { ReactElement } from 'react';

interface IStatisticCard {
  title: string;
  quantity: number;
  icon?: ReactElement;
  iconColor?: string;
}

export function StatisticCard({
  title,
  quantity,
  icon,
  iconColor,
}: IStatisticCard) {
  return (
    <li className="grid grid-cols-[1fr_min-content] p-4 rounded-lg bg-[#ffffff] shadow-[0_1px_3px_rgba(80,80,80,0.5)]">
      <h3 className="text-base text-zinc-500">{title}</h3>
      <p className="text-2xl font-medium text-zinc-700">{quantity}</p>
      <div
        className="self-center col-[2/3] row-[1/3] text-5xl"
        style={{ color: iconColor }}
      >
        {icon}
      </div>
    </li>
  );
}
