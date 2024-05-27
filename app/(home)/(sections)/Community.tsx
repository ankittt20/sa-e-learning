import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="pt-10 sm:pt-0 flex flex-col items-center justify-center gap-7 sm:gap-14">
      <h2 className="text-lg sm:text-4xl font-bold">Join our Biggest community Now!</h2>
      <p className="body-semibold max-w-[1082px] text-center">
        Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
        vulputate fames. Donec donec nisi neque gravida id purus eu nisl urna.
        odio ultrices nisi egetmetus. Vulputate condimentum tincidunt quis
        maecenas nibh
      </p>
      <Image
        src="/assets/images/join-community.svg"
        alt="Join Community"
        width={600}
        height={600}
        className="w-full"
      />
      <Link href="/login">
        <Button className="rounded-lg bg-accent-blue px-12 py-6 text-[20px] font-bold text-primary-100">
          Join Now
        </Button>
      </Link>
    </div>
  );
};

export default Community;
