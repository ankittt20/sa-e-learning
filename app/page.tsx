import Info from "@/components/shared/info/Info";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mt-[236px]">
      <div className="flex flex-col-reverse items-center justify-center max-sm:px-5 max-sm:text-center sm:flex-row sm:justify-between">
        <div>
          <h1 className="h1-bold max-w-[596px]">
            Dive into a world of{" "}
            <span className="text-[#F762A2]">learning excellence</span>
          </h1>
          <p className="body-semibold max-w-[596px]">
            Lorem ipsum dolor sit amet consectetur. Et nunc gravida dolor
            tincidunt lobortis velit enim. Pellentesque tempor urna nunc pretium
            ac leo.
          </p>
          <div className="mt-20 flex flex-col gap-9 sm:flex-row ">
            <button className="btn rounded-[30px] px-10 py-3">
              <p className="text-xl font-bold">Enroll Now</p>
            </button>
            <button className="btn btn-secondary  rounded-[30px] px-10 py-3">
              <Info
                image="/assets/icons/video.svg"
                text="Play Video"
                isImage
                extraClasses="text-xl font-bold"
                size={16}
              />
            </button>
          </div>
          <div className="my-20 flex gap-7">
            <Info
              image="/assets/icons/circle-blue.svg"
              text="Get certificate"
              isImage
              extraClasses="text-xl font-semibold"
              size={24}
            />
            <Info
              image="/assets/icons/circle-yellow.svg"
              text="Get certificate"
              isImage
              extraClasses="text-xl font-semibold"
              size={24}
            />
            <Info
              image="/assets/icons/circle-pink.svg"
              text="Get certificate"
              isImage
              extraClasses="text-xl font-semibold"
              size={24}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="max-h-[676px] max-w-[170px] rounded-[80px]">
            <Image
              src="/assets/images/hero1.png"
              width={170}
              height={676}
              alt="Hero1"
            />
          </div>
          <div className="-mt-24 flex-col">
            <Image
              src="/assets/images/hero2.png"
              width={170}
              height={424}
              alt="Hero1"
              className="mb-5"
            />
            <Image
              src="/assets/images/hero3.png"
              width={170}
              height={424}
              alt="Hero1"
            />
          </div>
          <div>
            <Image
              src="/assets/images/hero4.png"
              width={170}
              height={676}
              alt="Hero1"
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/icons/flask.svg"
        width={121}
        height={164}
        alt="flask"
        className="absolute bottom-5 left-2"
      />
      <Image
        src="/assets/icons/protractor.svg"
        width={85}
        height={65}
        alt="Protractor"
        className="absolute bottom-[7rem] left-[40%]"
      />
      <Image
        src="/assets/icons/notes.svg"
        width={70}
        height={73}
        alt="Notes"
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="absolute -top-[90px] right-0"
      />
      <Image
        src="/assets/icons/paperplane.svg"
        width={69}
        height={59}
        alt="Paperplane"
        // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
        className="absolute -top-[100px] right-[30%]"
      />
    </div>
  );
}
