import { NextRequest, NextResponse } from "next/server";
import dns from "dns";
import { pfValidSignature } from "@/lib/utils";
import {
  generateInvoice,
  validatePaymentAmount,
} from "@/actions/payments.action";
import axios from "axios";
import { addCourseToStudentCourses } from "@/actions/user.actions";

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
  const result = await axios
    .post("https://sandbox.payfast.co.za/eng/query/validate", pfParamString)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return result === "VALID";
};

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const keys = data.entries();
  try {
    let pfParamString = "";
    for (const key of Array.from(keys)) {
      const keyName = key[0];
      const keyValue = key[1];
      if (keyName !== "signature") {
        pfParamString += `${keyName}=${encodeURIComponent(
          keyValue?.toString()?.trim()
        ).replace(/%20/g, "+")}&`;
      }
    }
    pfParamString = pfParamString.slice(0, -1);

    const check1 = pfValidSignature(data, pfParamString, "Okbajuhfrcg2whanfvm");
    const check2 = await validIp(req);
    const productIds = data.get("custom_str1");
    const check3 = await validatePaymentAmount({
      productIds,
      userId: data.get("custom_str2"),
      amount: data.get("amount_gross"),
    });
    const check4 = await pfValidServerConfirmation(pfParamString);

    if (check1 && check2 && check3 && check4) {
      const courseAddResult = await addCourseToStudentCourses(
        productIds,
        data.get("custom_str2")
      );
      if (courseAddResult.success) {
        const res = await generateInvoice({
          orderName: data.get("item_name"),
          userId: data.get("custom_str2"),
          productIds,
          amount: data.get("amount_gross"),
          paymentId: data.get("pf_payment_id"),
          paymentStatus: data.get("payment_status"),
        });
        console.log(res);
      }
    }

    return NextResponse.json(
      {
        message: "Payment Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        message: "Something Went Wrong!",
      },
      { status: 500 }
    );
  }
}

// merchant_id=10033735&merchant_key=6e5on1l1ixuwq&return_url=https://2655-223-177-225-110.ngrok-free.app/dashboard&cancel_url=https://2655-223-177-225-110.ngrok-free.app/cancel&notify_url=https://2655-223-177-225-110.ngrok-free.app/api/payments&name_first=Shubham&name_last=Tiwary&email_address=www.aditi17%40gmail.com&amount=49.00&item_name=a20d4e55-e34c-42a7-a257-b0addd43275b&custom_str1=2&custom_str2=6
