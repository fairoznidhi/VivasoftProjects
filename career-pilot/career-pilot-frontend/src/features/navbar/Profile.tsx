import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/redux/features/auth/authSlice";

const Profile = () => {
  const username = useAppSelector((state) => state.auth.user?.user_name);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      {/* <img src="images/BellSimpleRinging.svg" /> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="images/icons/profile2.svg" className="w-7 h-7"/>
            <h1 className="font-semibold text-sm leading-[1.6] font-tiktok text-navyBlue">
              {username}
            </h1>
            <img
              src="images/Arrows.svg"
              className="transition-transform duration-300 group-data-[state=open]:rotate-180"
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40 z-[2]">
          {/* <DropdownMenuItem onClick={() => navigate("/profile")}>
            Profile
          </DropdownMenuItem> */}
          <DropdownMenuItem onClick={handleLogout} className="flex justify-between">Logout<img src="images/icons/logout.svg"/></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
