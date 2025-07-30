import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import type { TLoginForm } from "@/types/login";

import InputLabel from "@/components/input/InputLabel";
import Button from "@/components/button/Button";

import AppleLogin from "@/features/login/socialLogin/AppleLogin";
import GoogleLogin from "@/features/login/socialLogin/GoogleLogin";
import LinkedinLogin from "@/features/login/socialLogin/LinkedinLogin";
import MicrosoftLogin from "@/features/login/socialLogin/MicrosoftLogin";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const Login = () => {
  const { register, handleSubmit } = useForm<TLoginForm>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { error, isLoading }] = useLoginMutation();
  console.log("error:", error);
  console.log("isLoading ", isLoading);

  const onSubmit = async (data: TLoginForm) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      dispatch(setUser(res));
      navigate("/");
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      console.log(err);
    }
  };

  return (
    <section className="flex flex-col bg-customBackgroundColor w-[400px]">
      <h1 className="font-tiktok font-bold text-2xl text-navyBlue mb-2">
        Welcome aboard 👋
      </h1>
      <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%] mb-8">
        Sign in With
      </p>
      <div className="mb-8 flex space-x-6">
        <LinkedinLogin />
        <GoogleLogin />
        <AppleLogin />
        <MicrosoftLogin />
      </div>
      <div className="flex  items-center mb-8">
        <span className="block w-[180.5px] h-[1px] bg-custom-line-gradient"></span>
        <span className="text-[16px] leading-[160%] font-normal text-navyBlue font-tiktok mx-2">
          OR
        </span>
        <span className="block w-[180.5px] h-[1px] bg-custom-line-gradient"></span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          type="text"
          placeholder="e.g. Leonard"
          id="email"
          label="Email"
          {...register("email")}
        />
        <InputLabel
          id="password"
          placeholder="***********"
          label="Password"
          {...register("password")}
          password={true}
        />
        <Button>Login</Button>
      </form>
      <div className="flex justify-center items-center gap-x-1">
        <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%]">
          Don't have an account?
        </p>
        <h2
          className="font-tiktok font-semibold text-base text-navyBlue leading-[160%] cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Sign up
        </h2>
      </div>
    </section>
  );
};

export default Login;
