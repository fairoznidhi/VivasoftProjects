import type { InputHTMLAttributes } from "react";
import { useState } from "react";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  password?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const InputLabel = ({
  label,
  password = false,
  error = false,
  errorMessage,
  ...props
}: InputLabelProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col mb-6">
      <label className="font-tiktok text-base font-semibold leading-[160%] text-navyBlue mb-1">
        {label}
      </label>

      <div className="flex items-center gap-2 self-stretch rounded-[50px] border border-lightGrayBorder focus-within:border-gray-300 focus-within:shadow bg-white shadow-sm py-2.5 px-4">
        <input
          className="flex-grow bg-transparent outline-none w-full"
          type={password && !showPassword ? "password" : "text"}
          {...props}
        />

        {password && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <img
                src="/images/closeEye.svg"
                alt="Hide password"
                className="w-5 h-5 cursor-pointer"
              />
            ) : (
              <img
                src="/images/closeEye.svg"
                alt="Hide password"
                className="w-5 h-5 cursor-pointer"
              />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 ml-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputLabel;
