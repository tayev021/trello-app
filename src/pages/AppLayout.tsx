import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[min-content_1fr] bg-blue-400 bg-[url(/src/assets/bg.svg)] bg-size-[150px] overflow-hidden">
      <header className="py-4 px-6 bg-[#F1F2F4] shadow-[0_3px_8px_rgba(0,0,0,0.4)] z-40">
        <h1 className="font-medium text-xl capitalize leading-none text-blue-900 tracking-wider">
          Trello App
        </h1>
      </header>
      <main className="py-7 px-5 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
