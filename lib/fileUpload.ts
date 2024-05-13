import { app } from "./firebase";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import { validateFile } from "./fileValidation";

export const storage = getStorage(app);

export const uploadFile = async (
  file: File,
  path: string,
  fileType: string
) => {
  if (file) {
    // validate file type
    if (!validateFile(file, fileType)) {
      alert("Invalid file type");
      return;
    }

    const filePath = `${path}/${file.name + v4()}`;
    const fileRef = ref(storage, filePath);
    const uploadedFile = await uploadBytesResumable(fileRef, file);
    const downloadURL = await getDownloadURL(uploadedFile.ref);
    return downloadURL;
  }
};
