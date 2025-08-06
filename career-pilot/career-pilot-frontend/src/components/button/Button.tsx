import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?:string;
  hover?:boolean;
}

const Button = ({ children,className,hover=true, ...props }: IButton) => {
  return (
    <button
    className={`
      px-4 py-2 border border-grayBorder bg-gradient-to-b from-navyBlue to-darkBlue rounded-[50px] shadow-inset-white-glow 
      text-white font-tiktok text-sm font-semibold leading-[1.6]
      ${hover?'hover:from-[#060f2e] hover:to-[#0b1f50]':''}
      transition-all duration-300 ease-in-out
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
