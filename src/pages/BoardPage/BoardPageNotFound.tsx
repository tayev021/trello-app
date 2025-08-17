import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router';

export function BoardPageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] grid grid-rows-[min-content_1fr_min-content] rounded-lg bg-[#F1F2F4] shadow-xl overflow-hidden">
      <header className="grid grid-cols-[max-content_1fr_min-content_min-content] gap-4 items-center py-3 px-5 pr-4">
        <button
          className="flex items-center gap-2 py-0.5 px-3 rounded-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] active:bg-blue-200 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowLeft /> Go Back
        </button>
      </header>
      <main>
        <p className="py-10 px-6 text-lg text-center">
          This board was not found. Try again later.
        </p>
      </main>
    </div>
  );
}
