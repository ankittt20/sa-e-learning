import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaExclamation } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-gray-100 flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-lg bg-primary-100 p-6 text-center shadow-md">
        <FaExclamation className="mx-auto mb-3 text-6xl text-[#E90043]" />
        <h2 className="text-gray-800 text-2xl font-semibold">Payment Failed</h2>
        <p className="text-gray-600 mt-4">
          Unfortunately, we couldn&apos;t process your payment. Please try again
          or contact support.
        </p>
        <div className="mt-6">
          <Link href="/cart">
            <Button className="btn hover:bg-blue-600 rounded-md bg-accent-blue px-4 py-2 text-primary-100 transition duration-300">
              Return to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
