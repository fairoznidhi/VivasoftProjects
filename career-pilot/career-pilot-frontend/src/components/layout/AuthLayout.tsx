import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative">
      <main className="max-w-[1440px] mx-auto flex min-h-screen lg:h-[768px] lg:max-h-[1024px]">
        <aside className="w-[50%] h-full p-[4.68vh] hidden lg:block z-[-8]">
          <img
            src="/images/authBackground.svg"
            role="presentation"
            aria-hidden="true"
            className="pointer-events-none select-none w-auto h-full ml-auto object-cover"
          />
        </aside>
        <section
          className="w-[80%] md:w-[50%] flex justify-center items-center mx-auto"
          aria-label="Authentication Section"
        >
          <Outlet />
        </section>
      </main>
      <img
        src="/images/hue.svg"
        role="presentation"
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-[-5]"
      />
      <div
        className="absolute w-full h-[calc(100%-8rem)] top-32 left-0 z-[-10] bg-dots"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default AuthLayout;
