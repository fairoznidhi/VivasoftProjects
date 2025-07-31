import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const UploadResume = () => {
  const { register, handleSubmit } = useForm();
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const fileInputRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";
    else
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploading(true);
      setUploadedFile(null);
      setProgress(0);

      let currentStep = 0;
      const totalSteps = 40;
      progressIntervalRef.current = setInterval(() => {
        currentStep++;
        setProgress(Math.min(100, Math.floor((currentStep / totalSteps) * 100)));
        if (currentStep >= totalSteps) {
          clearInterval(progressIntervalRef.current);
          setUploadedFile({ name: file.name, size: file.size });
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
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const onSubmit = (data) => {
    if (!data.file?.length) return;
    console.log("Uploaded file:", data.file[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-y-10">
      <div className="relative flex flex-col items-center justify-center w-[52%] h-[400px] gap-y-6 border-2 border-dashed border-gray-300 rounded-[20px] bg-white hover:border-gradientBorder transition-colors">
        {uploading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-[20px] z-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-blue-600 font-semibold">Uploading... {progress}%</p>
          </div>
        )}

        <div className="border-2 border-neutral-200 p-3 rounded-[50%]">
          <img src="/images/icons/upload-icon.svg" alt="Upload Icon" className="w-6 h-6" />
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          {!uploading && uploadedFile ? (
            <div className="flex flex-col items-center gap-1">
              <p className="text-lg font-semibold text-green-600">
                {uploadedFile.name} Selected ✅
              </p>
              <p className="text-sm text-neutral-600">
                Size: {formatSize(uploadedFile.size)}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="text-red-500 font-bold text-xl hover:text-red-700"
              >
                ✖
              </button>
            </div>
          ) : !uploading ? (
            <>
              <p className="text-lg font-semibold text-gray-800 mb-2">Choose a file or drag & drop here</p>
              <p className="text-xs font-normal leading-[1.6] text-neutral-700">
                PDF, DOC, PNG, JPEG formats. Upto 10 MB
              </p>
            </>
          ) : null}
        </div>

        <label
          className="text-navyBlue text-sm font-semibold px-4 py-2 border-2 rounded-[50px] border-navyBlue cursor-pointer"
          htmlFor="fileInput"
        >
          {uploadedFile ? "Change File" : "Browse File"}
        </label>
      </div>

      <input
        type="file"
        id="fileInput"
        ref={fileInputRef}
        className="hidden"
        {...register("file")}
        onChange={handleFileChange}
      />

      <div>
        <button
          type="submit"
          disabled={uploading}
          className={`px-6 py-2 rounded-[50px] font-semibold text-lg transition ${
            uploading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white shadow-custom hover:bg-gray-50 text-navyBlue"
          }`}
        >
          Upload Now
        </button>
      </div>
    </form>
  );
};

export default UploadResume;
