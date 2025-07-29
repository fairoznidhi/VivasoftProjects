import { useNavigate } from "react-router-dom";
import Button from "./components/button/Button";
import { logout } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";
import { useUserProfileQuery } from "./redux/features/profile/profileApi";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const {data:profile}=useUserProfileQuery(null);
  console.log(profile)
  return (
    <>
      <div></div>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default App;
