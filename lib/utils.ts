import { type ClassValue, clsx } from "clsx";
import { createHash } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSignature(data: any, passPhrase: string) {
  // Create parameter string
  let pfOutput = "";
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      if (data[key as keyof typeof data] !== "") {
        pfOutput += `${key}=${encodeURIComponent(
          data[key as keyof typeof data].toString().trim()
        ).replace(/%20/g, "+")}&`;
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString += `&passphrase=${encodeURIComponent(passPhrase.trim()).replace(
      /%20/g,
      "+"
    )}`;
  }

  return createHash("md5").update(getString).digest("hex");
}

export const pfValidSignature = (
  pfData: any,
  pfParamString: string,
  passPharase: string
) => {
  if (passPharase !== null) {
    pfParamString += `&passphrase=${encodeURIComponent(
      passPharase.trim()
    ).replace(/%20/g, "+")}`;
  }
  const signature = createHash("md5").update(pfParamString).digest("hex");
  return pfData.signature === signature;
};
