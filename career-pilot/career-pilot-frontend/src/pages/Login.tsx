import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import InputLabel from "../components/input/InputLabel";
import H1Auth from "../components/ui/typography/H1Auth";
import PAuth from "../components/ui/typography/PAuth";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import type { TLoginForm } from "../types/login";
const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TLoginForm>();
  const [login, { error, isLoading }] = useLoginMutation();
  console.log("error:", error);
  console.log("isLoading ", isLoading);

  const onSubmit = async (data: TLoginForm) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    dispatch(setUser(res));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-customBackgroundColor w-[400px]"
    >
      <H1Auth>Welcome aboard 👋</H1Auth>
      <PAuth>Sign in With</PAuth>
      <div>
        <InputLabel
          type="text"
          placeholder="e.g. Leonard"
          id="email"
          label="Email"
          {...register("email")}
        />
      </div>
      <div>
        <InputLabel
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
