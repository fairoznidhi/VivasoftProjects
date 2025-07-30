import { useForm } from "react-hook-form";

const UploadResume = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const file = data.file[0];
    console.log(file);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center w-[52%] h-[400px] gap-y-6 border-2 border-dashed border-gray-300 rounded-[20px] bg-white cursor-pointer hover:border-gradientBorder transition-colors"
      >
        <div className="border-2 border-neutral-200 p-3 rounded-[50%]">
          <img
            src="/images/icons/upload-icon.svg"
            alt="Upload Icon"
            className="w-6 h-6"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold text-gray-800 font-tiktok mb-2">
            Choose a file or drag & drop here
          </p>
          <p className="font-tiktok text-xs font-normal leading-[1.6] text-neutral-700">
            PDF, DOC, PNG, JPEG formats. Upto 10 MB
          </p>
        </div>
        <div className="text-navyBlue text-sm font-tiktok font-semibold  px-4 py-2 border-2 rounded-[50px] border-navyBlue">Browse file</div>
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept=".pdf,.doc,.docx,.png,.jpeg"
        {...register("files")}
      />

      <div>
        <button className="px-6 py-2 rounded-[50px] bg-white shadow-custom font-tiktok text-lg font-semibold leading-[1.6] hover:bg-gray-50 transition-transform duration-200 ease-in-out text-navyBlue cursor-pointer">
          Upload Now
        </button>
      </div>
    </form>
  );
};

export default UploadResume;
