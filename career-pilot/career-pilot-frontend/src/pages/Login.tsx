import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { Button } from "../components/ui/button";
import { useAppDispatch } from "../redux/hooks";
const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "0001",
      password: "admin12345",
    },
  });
  const [login, { error }] = useLoginMutation();
  console.log("error:", error);

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    dispatch(setUser({ user: {}, token: res.data.accessToken }));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center min-h-screen gap-4"
    >
      <h1 className="text-xl font-semibold mb-4">Login Here </h1>
      <div>
        <input
          type="text"
          placeholder="ID"
          className="border border-gray-300 rounded w-64 h-10 p-4 m-1"
          id="id"
          {...register("userId")}
        />
      </div>
      <div>
        <input
          type="text"
          id="password"
          className="border border-gray-300 rounded w-64 h-10 p-4 m-1"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <Button>Login</Button>
    </form>
  );
};

export default Login;
