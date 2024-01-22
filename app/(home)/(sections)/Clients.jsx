import Info from "@/components/shared/info/Info";
import React from "react";

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="h2-bold">Trusted By 100+ companies & university</h2>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-9">
        <Info
          image="/assets/icons/microsoft.svg"
          text="Microsoft"
          size={26.45}
          isImage
          fontStyles="text-sm sm:text-[26px] font-semibold text-[rgba(0,0,0,0.5)]"
        />
        <Info
          image="/assets/icons/slack.svg"
          text="Slack"
          size={26.45}
          isImage
          fontStyles="text-sm sm:text-[26px] font-semibold text-[rgba(0,0,0,0.5)]"
        />
        <Info
          text="Udemy"
          size={26.45}
          isImage={false}
          fontStyles="text-sm sm:text-[26px] font-semibold text-[rgba(0,0,0,0.5)]"
        />
        <Info
          image="/assets/icons/walmart.svg"
          text="Walmart"
          size={26.45}
          isImage
          fontStyles="text-sm sm:text-[26px] font-semibold text-[rgba(0,0,0,0.5)]"
        />
        <Info
          text="Google"
          size={26.45}
          isImage={false}
          fontStyles="text-sm sm:text-[26px] font-semibold text-[rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
};

export default Clients;
