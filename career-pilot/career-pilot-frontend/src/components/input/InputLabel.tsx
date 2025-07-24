import type { InputHTMLAttributes } from "react";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputLabel = ({ label, ...props }: InputLabelProps) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="font-tiktok text-base font-semibold leading-[160%] text-navyBlue mb-1">
        {label}
      </label>
      <div className=" gap-2 self-stretch rounded-[50px] border border-lightGrayBorder focus-within:border-gray-300 focus-within:shadow bg-white shadow-sm py-2.5 px-4">
        <input
          className="flex-grow bg-transparent outline-none w-full"
          {...props}
        />
      </div>
    </div>
  );
};

export default InputLabel;
