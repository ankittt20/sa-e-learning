const fileTypes: { [key: string]: string[] } = {
  image: ["image/jpeg", "image/png", "image/gif"],
  video: [
    "video/mp4",
    "video/mpeg",
    "video/quicktime",
    "image/jpeg",
    "image/png",
    "image/gif",
  ],
  text: [
    "text/plain",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  audio: ["audio/mpeg", "audio/ogg", "audio/wav", "audio/midi"],
};

export const validateFile = (file: File, fileType: string) => {
  if (fileTypes[fileType].includes(file.type)) {
    return true;
  }
  return false;
};
