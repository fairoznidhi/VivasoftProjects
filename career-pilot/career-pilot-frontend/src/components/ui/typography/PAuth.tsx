import type { ReactNode } from "react";

interface PAuthProps {
  children: ReactNode;
}

const PAuth = ({ children }: PAuthProps) => {
  return (
    <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%] mb-8 select-none">
      {children}
    </p>
  );
};

export default PAuth;
