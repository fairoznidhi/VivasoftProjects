import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
  const username = useAppSelector((state) => state.auth.user?.user_name);
  const navigate=useNavigate();
  return (
    <div className="flex items-center gap-4">
      <img src="images/BellSimpleRinging.svg" className=""/>
      <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/profile')}>
        <img src="images/maleAvatar.svg" />
        <h1 className="font-semibold text-sm leading-[1.6] font-tiktok text-navyBlue">{username}</h1>
        <img src="images/Arrows.svg" />
      </div>
    </div>
  );
};

export default Profile;
