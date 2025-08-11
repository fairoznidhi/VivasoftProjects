import Navbar from "@/features/navbar/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { Navigate, Outlet } from "react-router-dom";
const NavbarLayout = () => {
  const auth = useAppSelector((state) => state.auth);
  if (!auth.accessToken) return <Navigate to="/login" />;
  return (
    <div className="relative overscroll-none">
      <main className="max-w-[1440px] mx-auto flex min-h-screen ">
        <section className="lg:mx-[100px] w-full">
          <Navbar />
          <Outlet />
        </section>
      </main>
      <img
        src="/images/hue.svg"
        role="presentation"
        aria-hidden="true"
        className="fixed  bottom-0 left-0 w-full pointer-events-none select-none z-[-5]"
      />
      <div
        className="absolute w-full h-[calc(100%-10rem)] top-40 left-0 z-[-10] bg-dots"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default NavbarLayout;
