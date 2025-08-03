import GradientButton from "@/components/button/GradientButton";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader, FadeLoader } from "react-spinners";

type UploadedFile = {
  name: string;
  size: number;
  type: string;
};

const UploadResume = () => {
  const { register, handleSubmit } = useForm();
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [progress, setProgress] = useState(0);
  console.log(uploadedFile);

  const fileInputRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploading(true);
      setUploadedFile({
        name: file.name,
        size: file.size,
        type: file.name.split(".").pop(),
      });
      setProgress(0);

      let currentStep = 0;
      const totalSteps = 40;
      progressIntervalRef.current = setInterval(() => {
        currentStep++;
        setProgress((currentStep / totalSteps) * file.size);
        if (currentStep >= totalSteps) {
          clearInterval(progressIntervalRef.current);
          setUploading(false);
        }
      }, 50);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, []);

  const onSubmit = (data) => {
    if (!data.file?.length) return;
    console.log("Uploaded file:", data.file[0]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-y-10"
    >
      <div className="w-[52%] h-[400px] gap-y-6 border-2 border-dashed border-gray-300 rounded-[20px] bg-white hover:border-gradientBorder transition-colors">
        {/* {uploading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-[20px] z-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-blue-600 font-semibold">
              Uploading... {progress}%
            </p>
          </div>
        )} */}
        {uploading || uploadedFile ? (
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3">
                <img
                  src={`/images/icons/${uploadedFile?.type}-icon.svg`}
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="text-navyBlue font-tiktok text-base font-semibold leading-[1.6]">
                    {uploadedFile?.name}
                  </h1>
                  <div className="flex items-center gap-x-1">
                    <p className="font-tiktok text-sm font-normal leading-[1.6] text-neutral-700">
                      {formatSize(progress)} of {formatSize(uploadedFile?.size)}
                    </p>
                    <span className="inline-block bg-navyBlue w-[6px] h-[6px] rounded-full"></span>
               <img src={`/images/icons/spinner-icon.svg`}/>
                    <p className="font-tiktok text-sm font-normal leading-[1.6] text-neutral-700">
                      Uploading...
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="text-red-500 font-bold text-xl hover:text-red-700"
              ></button>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                src={`/images/icons/${
                  uploading ? "cross-icon" : "delete-icon"
                }.svg`}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : !uploading && !uploadedFile ? (
          <div className="flex flex-col justify-center items-center text-center h-full">
            <div className="border-2 border-neutral-200 p-3 rounded-[50%] mb-6">
              <img
                src="/images/icons/upload-icon.svg"
                alt="Upload Icon"
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm font-normal text-navyBlue mb-2 font-tiktok">
              Choose a file or drag & drop here
            </p>
            <p className="text-xs font-normal leading-[1.6] text-neutral-700 font-tiktok mb-6">
              PDF, DOC, PNG, JPEG formats. Upto 10 MB
            </p>
            <label
              className="text-navyBlue text-sm font-semibold px-4 py-2 border-2 rounded-[50px] border-navyBlue cursor-pointer"
              htmlFor="fileInput"
            >
              Browse file
            </label>
          </div>
        ) : null}
      </div>

      <input
        type="file"
        id="fileInput"
        ref={fileInputRef}
        className="hidden"
        {...register("file")}
        onChange={handleFileChange}
      />
      <GradientButton text="Upload Now" />
    </form>
  );
};

export default UploadResume;
