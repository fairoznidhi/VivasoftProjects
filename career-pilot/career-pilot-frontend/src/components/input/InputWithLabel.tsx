import type { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputWithLabel = ({ label, ...props }: InputWithLabelProps) => {
  return (
    <div className="flex flex-col mb-6">
      <label className="font-tiktok text-base font-semibold leading-[160%] text-navyBlue mb-1">
        {label}
      </label>
      <div className=" gap-2 self-stretch rounded-[50px] border border-[#E3E4E6] bg-white shadow-sm py-2.5 pr-2.5 pl-4">
        <input className="flex-grow bg-transparent outline-none" {...props} />
      </div>
    </div>
  );
};

export default InputWithLabel;
