import { Outlet } from "react-router-dom";
import BottomBackgroundHue from "../background/BottomBackgroundHue";
import EllipseBackgroundPattern from "../background/EllipseBackgroundPattern";

const AuthLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[-1]">
        <BottomBackgroundHue />
      </div>
      <div className="z-[-20] pointer-events-none">
        {/* <EllipseBackgroundPattern /> */}
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-center items-center z-[-10]">
          <div className="w-full h-[90vh] bg-[url(/images/authBackground.png)] bg-no-repeat bg-center bg-contain"></div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="bg-customBackgroundColor w-[50%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
