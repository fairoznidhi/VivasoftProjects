import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { Button } from "../components/ui/button";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import H1Auth from "../components/ui/typography/H1Auth";
import PAuth from "../components/ui/typography/PAuth";
import InputWithLabel from "../components/input/InputWithLabel";
const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { error }] = useLoginMutation();
  console.log("error:", error);

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: { user }, token: res.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <H1Auth>Welcome aboard 👋</H1Auth>
      <PAuth>Sign in With</PAuth>
      <div>
        <InputWithLabel
          type="text"
          placeholder="e.g. Leonard"
          id="id"
          label="Email"
          {...register("userId")}
        />
      </div>
      <div>
        <InputWithLabel
          type="text"
          id="password"
          placeholder="***********"
          label="Password"
          {...register("password")}
        />
      </div>
      <Button>Login</Button>
    </form>
  );
};

export default Login;
