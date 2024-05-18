"use server";
import { generateSignature } from "@/lib/utils";

export const makePayment = async (data: any) => {
  const passPhrase = "Okbajuhfrcg2whanfvm";
  const signature = generateSignature(data, passPhrase);
  data.signature = signature;

  let htmlForm = `<form action="https://sandbox.payfast.co.za/eng/process" method="post">`;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key as keyof typeof data];
      if (value !== "")
        htmlForm += `<input type="hidden" name="${key}" value="${value}">`;
    }
  }

  htmlForm +=
    '<input type="submit" value="Pay Now" className="bg-accent-blue w-full text-primary-100 py-4 cursor-pointer" /></form>';

  return htmlForm;
};
