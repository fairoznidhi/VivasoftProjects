import type { ReactNode } from "react";

interface H2AuthProps {
  children: ReactNode;
}
const H2Auth = ({ children }: H2AuthProps) => {
  return (
    <h2 className="font-tiktok font-semibold leading-[160%] text-base text-navyBlue mb-2">
      {children}
    </h2>
  );
};

export default H2Auth;
