import ActionButton from "@/components/button/ActionButton";
import GradientButton from "@/components/button/GradientButton";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type UploadedFile = {
  name: string;
  size: number;
  type: string;
};

type FormValues = {
  file: FileList;
};

const UploadResume = () => {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [progress, setProgress] = useState(0);
  const [shadProgress, setShadProgress] = useState(0);
  const navigate = useNavigate();
  const watchedFile = watch("file");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  console.log(shadProgress);

  const fileInputRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / (1024 * 1024)).toFixed(2) + " MB";
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Submitted files:", data.file);
    if (data.file.length > 0) {
      console.log("First file:", data.file[0]);
    }
  };
  const openPreviewInNewWindow = () => {
    if (previewUrl) {
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[60%] ">
        <ActionButton />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center gap-y-10"
        >
          <div className="w-full h-[400px] gap-y-6 border-2 border-dashed border-gray-300 rounded-[20px] bg-white hover:border-gradientBorder transition-colors">
            {uploading || uploadedFile ? (
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
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
                          {formatSize(progress)} of{" "}
                          {formatSize(uploadedFile?.size)}
                        </p>
                        <span className="inline-block bg-navyBlue w-[6px] h-[6px] rounded-full"></span>
                        <img
                          src={`/images/icons/${
                            uploading ? "spinner" : "completed"
                          }-icon.svg`}
                        />
                        <p className="font-tiktok text-sm font-normal leading-[1.6] text-neutral-700">
                          {uploading ? "Uploading..." : "Completed"}
                        </p>
                      </div>
                    </div>
                  </div>
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
                {uploading ? (
                  <Progress
                    value={shadProgress}
                    className="h-2 bg-blue-50 rounded-full [&>[data-state=indeterminate]]:bg-cornflowerBlue
             [&>[data-state=complete]]:bg-cornflowerBlue"
                  />
                ) : (
                  <div>
                    <button
                      className="text-navyBlue text-sm font-semibold px-4 py-2 border-2 rounded-[50px] border-navyBlue cursor-pointer"
                      onClick={openPreviewInNewWindow}
                    >
                      Preview resume
                    </button>
                  </div>
                )}
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
            accept=".pdf,.doc,.png,.jpg,.jpeg"
            {...register("file", {
              onChange: (e) => {
                if (e.target.files && e.target.files.length > 0) {
                  const file = e.target.files[0];
                  const url = URL.createObjectURL(file);
                  setPreviewUrl(url);
                  setUploading(true);
                  setUploadedFile({
                    name: file.name,
                    size: file.size,
                    type: file.name.split(".").pop() || "unknown",
                  });
                  setProgress(0);
                  setShadProgress(0);

                  let currentStep = 0;
                  const totalSteps = 40;
                  if (progressIntervalRef.current)
                    clearInterval(progressIntervalRef.current);
                  progressIntervalRef.current = setInterval(() => {
                    currentStep++;
                    setProgress((currentStep / totalSteps) * file.size);
                    setShadProgress((currentStep / totalSteps) * 100);
                    if (currentStep >= totalSteps) {
                      clearInterval(progressIntervalRef.current);
                      setUploading(false);
                    }
                  }, 50);
                }
              },
            })}
          />

          <GradientButton
            text="Upload Now"
            type="submit"
            disabled={!uploadedFile || (uploadedFile && uploading)}
          />
          <div>
            {watchedFile && watchedFile.length > 0 ? (
              <p>Selected file: {watchedFile[0].name}</p>
            ) : (
              <p>No file selected yet</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadResume;
