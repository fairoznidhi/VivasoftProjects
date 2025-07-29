import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative">
      <main className="max-w-[1440px] mx-auto flex min-h-screen lg:h-[768px] lg:max-h-[1024px]">
      </main>
      {/* Bottom Hue */}
      <img
        src="/images/hue.svg"
        role="presentation"
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-50"
      />
      {/* Background Dots  */}
      <div
        className="w-full h-[90vh] fixed bottom-0 left-0 z-[-10] bg-dots"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default AuthLayout;
