import { Outlet } from "react-router-dom";
import ActionButton from "../button/ActionButton";

const HomeLayout = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[60%] ">
        <ActionButton />
        <Outlet/>
      </div>
    </div>
  );
};

export default HomeLayout;
