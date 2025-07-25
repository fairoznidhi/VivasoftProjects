import { useNavigate } from "react-router-dom";
import Button from "./components/button/Button";
import { logout } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default App;
