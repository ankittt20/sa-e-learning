import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <h2 className="h2-bold">Join our Biggest community Now!</h2>
      <p className="body-semibold max-w-[1082px] text-center">
        Lorem ipsum dolor sit amet consectetur. Auctor suspendisse tempus
        vulputate fames. Donec donec nisi neque gravida id purus eu nisl urna.
        odio ultrices nisi egetmetus. Vulputate condimentum tincidunt quis
        maecenas nibh
      </p>
      <Link href="/login">
        <Button className="rounded-2xl bg-accent-blue px-12 py-6 text-[20px] font-bold text-primary-100">
          Join Now
        </Button>
      </Link>
    </div>
  );
};

export default Community;
