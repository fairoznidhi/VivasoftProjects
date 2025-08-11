import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import type { TLoginForm } from "@/types/login";

import InputLabel from "@/components/input/InputLabel";

import AppleLogin from "@/features/login/socialLogin/AppleLogin";
import GoogleLogin from "@/features/login/socialLogin/GoogleLogin";
import LinkedinLogin from "@/features/login/socialLogin/LinkedinLogin";
import MicrosoftLogin from "@/features/login/socialLogin/MicrosoftLogin";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  if (auth?.accessToken) {
    navigate("/");
  }
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

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
      toast.error("Invalid Credentials", { id: toastId, duration: 6000 });
      console.log(err);
    }
  };

  return (
    <section className="flex flex-col lg:w-[400px]">
      <h1 className="font-tiktok font-bold text-2xl text-navyBlue mb-2">
        Welcome aboard 👋
      </h1>
      <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%] mb-8">
        Sign in With
      </p>
      {/* <div className="mb-8 flex space-x-6">
        <LinkedinLogin />
        <GoogleLogin />
        <AppleLogin />
        <MicrosoftLogin />
      </div> */}
      {/* <div className="flex  items-center mb-8">
        <span className="block w-[180.5px] h-[1px] bg-custom-line-gradient"></span>
        <span className="text-[16px] leading-[160%] font-normal text-navyBlue font-tiktok mx-2">
          OR
        </span>
        <span className="block w-[180.5px] h-[1px] bg-custom-line-gradient"></span>
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          type="text"
          placeholder="e.g. Leonard"
          id="email"
          label="Email"
          error={!!errors?.email}
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 254,
              message: "Email must be less than 255 characters",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <InputLabel
          id="password"
          placeholder="***********"
          label="Password"
          {...register("password")}
          password={true}
        />
        <Button variant="blue" className="w-full mb-6">
          {isLoading ? "Logging in..." : "Login"}
        </Button>
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
