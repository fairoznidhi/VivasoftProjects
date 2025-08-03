import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button/Button";
import InputLabel from "@/components/input/InputLabel";
import AppleLogin from "@/features/login/socialLogin/AppleLogin";
import GoogleLogin from "@/features/login/socialLogin/GoogleLogin";
import LinkedinLogin from "@/features/login/socialLogin/LinkedinLogin";
import MicrosoftLogin from "@/features/login/socialLogin/MicrosoftLogin";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import type { TRegisterForm } from "@/types/register";
import { toast } from "sonner";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type CustomError = FetchBaseQueryError & {
  data?: { message?: string };
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TRegisterForm>();
  const navigate = useNavigate();

  const [registerUser, { error, isLoading }] = useRegisterMutation();
  console.log("error Register", error);
  console.log("isLoading Register", isLoading);

  const onSubmit = async (data: TRegisterForm) => {
    const toastId = toast.loading("Signing up");
    try {
      const userInfo = {
        user_name: data?.username,
        email: data.email,
        password: data.password,
      };
      const res = await registerUser(userInfo).unwrap();
      console.log("res", res);
      navigate("/login");
      toast.success("Registration successful", {
        id: toastId,
        duration: 2000,
      });
    } catch (err) {
      const customError = error as CustomError;
      const errorMessage = customError?.data?.message;
      toast.error(errorMessage, {
        id: toastId,
        duration: 2000,
      });
      console.log(err);
    }
  };
  return (
    <section className="flex flex-col w-[400px]">
      <h1 className="font-tiktok font-bold text-2xl text-navyBlue mb-2">
        Let's get started 👋
      </h1>
      <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%] mb-8">
        Sign up With
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
          id="username"
          label="Username"
          error={!!errors?.username}
          errorMessage={errors.username?.message}
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
        />
        <InputLabel
          type="text"
          placeholder="e.g. leonard@gmail.com"
          id="email"
          label="Email"
          error={!!errors?.email}
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />

        <InputLabel
          password={true}
          id="password"
          placeholder="***********"
          label="Password"
          error={!!errors?.password}
          errorMessage={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <InputLabel
          password={true}
          id="confirmPassword"
          placeholder="***********"
          label="Confirm password"
          error={!!errors?.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />

        <Button>Signup</Button>
      </form>
      <div className="flex justify-center items-center gap-x-1">
        <p className="font-tiktok font-normal text-base text-neutral-700 leading-[160%]">
          Already have an account?
        </p>
        <h2
          className="font-tiktok font-semibold text-base text-navyBlue leading-[160%] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </h2>
      </div>
    </section>
  );
};

export default Register;
