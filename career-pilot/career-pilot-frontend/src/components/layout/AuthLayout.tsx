import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="relative">
      <main className="max-w-[1440px] mx-auto flex min-h-screen h-[768px] max-h-[1024px]">
        {/* Left Image Section  */}
        <section className="w-[50%] h-full p-[4.68vh] hidden lg:block">
          <img
            src="/images/authBackground.svg"
            alt="Auth Background"
            className="pointer-events-none select-none w-auto h-full ml-auto object-cover"
          />
        </section>
        {/* Right Section  */}
        <section className="w-[80%] md:w-[50%] flex justify-center items-center mx-auto">
          <Outlet />
        </section>
      </main>
      {/* Bottom Hue */}
      <img
        src="/images/hue.svg"
        alt="Hue background"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-50"
      />
      {/* Background Dots  */}
      <div className="w-full h-[90vh] fixed bottom-0 left-0 z-[-10] bg-dots"></div>
    </main>
  );
};

export default AuthLayout;
