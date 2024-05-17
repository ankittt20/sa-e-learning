import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaExclamation } from "react-icons/fa";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <FaExclamation className="text-6xl mb-3 mx-auto text-[#E90043]" />
        <h2 className="text-2xl font-semibold text-gray-800">Payment Failed</h2>
        <p className="mt-4 text-gray-600">
          Unfortunately, we couldn't process your payment. Please try again or
          contact support.
        </p>
        <div className="mt-6">
          <Link href="/cart">
            <Button className="btn px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Return to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
