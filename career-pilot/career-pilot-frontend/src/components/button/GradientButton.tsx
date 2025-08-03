import type { ButtonHTMLAttributes } from "react";

interface GradientButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text:string
}
const GradientButton = ({ text, onClick }:GradientButton) => {
  return (
    <div className="bg-customGradient rounded-[50px] p-[1px]">
      <div className="bg-white p-[2px] rounded-[50px]">
        <button
          onClick={onClick}
          className={`px-6 py-2 rounded-[50px] bg-white shadow-custom font-tiktok text-lg font-semibold leading-[1.6] hover:bg-gray-50 transition-transform duration-200 ease-in-out text-navyBlue cursor-pointer`}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
