import GradientButton from "@/components/button/GradientButton";
import { Progress } from "@/components/ui/progress";
import { useFlow } from "@/context/FlowContext";
import { useResumeUploadMutation } from "@/redux/api/resumeApi";
import type { FormValues, UploadedFile } from "@/types/uploadResume";
import { formatSize } from "@/utils/formatSize";
import { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const { updateActiveButtons } = useFlow();
  const navigate = useNavigate();
  useEffect(() => {
    updateActiveButtons({ UploadResume: true });
  }, []);
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [progress, setProgress] = useState(0);
  const [shadProgress, setShadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const removeFile = () => {
    setUploadedFile(null);
    setProgress(0);
    setValue("file", null);
  };
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!data.file?.length) {
      console.log("No file receieved");
      return;
    }
    const file = data.file[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const result = await resumeUpload(formData).unwrap();
      console.log("File uploaded", result);
      navigate("/explore-curated-jobs");
    } catch (err) {
      console.log(err);
    }
  };
  const openPreviewInNewWindow = () => {
    if (previewUrl) {
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    }
  };
  const [resumeUpload] = useResumeUploadMutation();
  return (
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
                  className={`w-10 h-10`}
                />
                <div>
                  <h1 className="text-navyBlue font-tiktok text-base font-semibold leading-[1.6]">
                    {uploadedFile?.name}
                  </h1>
                  <div className="flex items-center gap-x-1">
                    <p className="font-tiktok text-sm font-normal leading-[1.6] text-neutral-700">
                      {formatSize(progress)} of{" "}
                      {formatSize(uploadedFile?.size ?? 0)}
                    </p>
                    <span className="inline-block bg-navyBlue w-[6px] h-[6px] rounded-full"></span>
                    <img
                      src={`/images/icons/${
                        uploading ? "spinner" : "completed"
                      }-icon.svg`}
                      className={`${uploading ? "animate-spin" : ""}`}
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
                  type="button"
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
              PDF format
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
        className="hidden"
        accept=".pdf"
        {...register("file", {
          onChange: (e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              setPreviewUrl(URL.createObjectURL(file));
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
                if (currentStep % 10 == 0)
                  setProgress((currentStep / totalSteps) * file.size);
                setShadProgress((currentStep / totalSteps) * 100);
                if (currentStep >= totalSteps && progressIntervalRef.current) {
                  clearInterval(progressIntervalRef.current);
                  setUploading(false);
                }
              }, 50) as unknown as number;
            }
          },
        })}
      />

      <GradientButton
        text="Upload Now"
        type="submit"
        disabled={!uploadedFile || (uploadedFile && uploading)}
      />
    </form>
  );
};

export default UploadResume;
