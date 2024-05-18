import { NextResponse } from "next/server";
import dns from "dns";
import { pfValidSignature } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = JSON.parse(JSON.stringify(req.body));
    console.log(body);
    let pfParamString = "";
    for (const key in body) {
      if (
        Object.prototype.hasOwnProperty.call(body, key) &&
        key !== "signature"
      ) {
        const value = body[key as keyof typeof body];
        if (value !== "") {
          pfParamString += `${key}=${encodeURIComponent(value.trim()).replace(
            /%20/g,
            "+"
          )}&`;
        }
      }
    }
    pfParamString = pfParamString.slice(0, -1);

    const check1 = pfValidSignature(body, pfParamString, "Okbajuhfrcg2whanfvm");
    const check2 = await validIp(req);
    const check3 = await pfValidServerConfirmation(pfParamString);

    console.log("check1", check1);
    console.log("check2", check2);
    console.log("check3", check3);

    if (check1 && check2 && check3) {
      return NextResponse.json(
        {
          message: "Payment Successful",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something Went Wrong!",
      },
      { status: 500 }
    );
  }
}

const ipLookUp = async (domain: any) => {
  return new Promise((resolve, reject) => {
    dns.lookup(domain, { all: true }, (err: any, address: any, family: any) => {
      if (err) {
        reject(err);
      }
      const addressIps = address.map((ad: any) => {
        return ad.address;
      });
      resolve(addressIps);
    });
  });
};

const validIp = async (req: any) => {
  const validHosts = [
    "www.payfast.co.za",
    "sandbox.payfast.co.za",
    "w1w.payfast.co.za",
    "w2w.payfast.co.za",
  ];

  let validIps: string[] = [];
  const pfIp =
    req.headers.get("x-forwarded-for") || req?.connection.remoteAddress;

  for (const host of validHosts) {
    const ips: any = await ipLookUp(host);
    validIps = [...validIps, ...ips];
  }
  const uniqueIps = Array.from(new Set(validIps));
  if (uniqueIps.includes(pfIp)) {
    return true;
  }
  return false;
};

const pfValidServerConfirmation = async (pfParamString: any) => {
  const result = await fetch(
    "https://sandbox.payfast.co.za/​eng/query/validate"
  );
  const data = await result.json();
  return data;
};
