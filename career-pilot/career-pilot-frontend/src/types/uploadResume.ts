export type UploadedFile = {
  name: string;
  size: number;
  type: string;
};

export type FormValues = {
  file: FileList|null;
};