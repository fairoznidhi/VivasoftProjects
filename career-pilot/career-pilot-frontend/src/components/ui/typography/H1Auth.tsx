import type { ReactNode } from "react";

interface H1AuthProps {
  children: ReactNode;
}
const H1Auth = ({ children }: H1AuthProps) => {
  return (
    <h1 className="font-tiktok font-bold text-2xl text-navyBlue mb-2">
      {children}
    </h1>
  );
};

export default H1Auth;
