import { useForm } from "react-hook-form";
import Button from "../components/button/Button";
import InputLabel from "../components/input/InputLabel";
import H1Auth from "../components/ui/typography/H1Auth";
import PAuth from "../components/ui/typography/PAuth";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import type { TLoginForm } from "../types/login";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import GoogleLogin from "../features/login/socialLogin/GoogleLogin";
import LinkedinLogin from "../features/login/socialLogin/LinkedinLogin";
import AppleLogin from "../features/login/socialLogin/AppleLogin";
import MicrosoftLogin from "../features/login/socialLogin/MicrosoftLogin";
const Login = () => {
  // React hook form
  const { register, handleSubmit } = useForm<TLoginForm>();
  //Route navigation
  const navigate = useNavigate();
  //Dispatching
  const dispatch = useAppDispatch();

  // Login post api
  const [login, { error, isLoading }] = useLoginMutation();
  console.log("error:", error);
  console.log("isLoading ", isLoading);

  // Login Info submission
  const onSubmit = async (data: TLoginForm) => {
    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      dispatch(setUser(res)); //dispatch setUser(auth)
      navigate("/"); //after login navigate to '/
      toast.success("Logged in", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      console.log(err)
    }
  };

  return (
    <section className="flex flex-col bg-customBackgroundColor w-[400px]">
      <H1Auth>Welcome aboard 👋</H1Auth>
      <PAuth>Sign in With</PAuth>
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
    </section>
  );
};

export default Login;
