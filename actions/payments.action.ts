"use server";
import { generateSignature } from "@/lib/utils";
import { db } from "@/lib/prisma";

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
    '<input type="submit" value="Pay Now" class="bg-accent-blue w-full text-primary-100 py-4 mt-3 text-semibold cursor-pointer"/></form>';

  return htmlForm;
};

export const validatePaymentAmount = async (data: any) => {
  let productIds = data.productIds;
  productIds = productIds.split("$").map((id: string) => +id);

  try {
    // find the total cost of products purchased from the cart
    const selectedCartTotal = await db.course.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
      select: {
        price: true,
      },
    });
    const sumTotal = selectedCartTotal.reduce((acc: number, product: any) => {
      return acc + product.price;
    }, 0);
    return sumTotal === +data.amount;
  } catch (error) {
    console.log(error);
    return { total: 0, success: false };
  }
};

export const generateInvoice = async (data: any) => {
  // create product id from the data
  const productIds = data.productIds.split("$").map((id: string) => +id);

  try {
    await db.orderInvoice.create({
      data: {
        orderName: data.orderName,
        user: {
          connect: {
            id: +data.userId,
          },
        },
        products: {
          createMany: {
            data: productIds.map((id: number) => {
              return {
                courseId: id,
              };
            }),
          },
        },
        transaction: {
          create: {
            transactionId: data.paymentId,
            amount: data.amount,
            transactionStatus: data.paymentStatus,
          },
        },
      },
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
