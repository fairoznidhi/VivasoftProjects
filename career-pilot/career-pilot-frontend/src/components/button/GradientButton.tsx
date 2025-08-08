import type { ButtonHTMLAttributes } from "react";

interface GradientButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const GradientButton = ({ text, ...props }: GradientButton) => {
  const isDisabled = props.disabled;
  return (
    <div className={`bg-customGradientBack rounded-[50px] p-[1px] ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}>
      <div
        className={`bg-white p-[2px] rounded-[50px] ${
          isDisabled ? "cursor-not-allowed" : ""
        }`}
      >
        <div
          className={`bg-customGradient rounded-[50px] p-[1px] ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <div
            className={`bg-white p-[2px] rounded-[50px] ${
              isDisabled ? "cursor-not-allowed" : ""
            }`}
          >
            <button
              {...props}
              className={`px-6 py-2 rounded-[50px] bg-white shadow-custom font-tiktok text-lg font-semibold leading-[1.6] hover:bg-gray-50 transition-transform duration-200 ease-in-out text-navyBlue cursor-pointer disabled:cursor-not-allowed`}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientButton;
