import { useNavigate } from 'react-router';
import { HiOutlineArrowLeft } from 'react-icons/hi2';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center gap-2 py-0.5 px-3 rounded-2xl hover:bg-[#FFFFFF] hover:shadow-[0_1px_3px_rgba(80,80,80,0.5)] active:bg-blue-200 cursor-pointer"
      onClick={() => navigate('/')}
    >
      <HiOutlineArrowLeft /> Go Back
    </button>
  );
}
