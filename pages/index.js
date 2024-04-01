import VerticalSlider from "@/components/VerticalSlider";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 640px)");
  return (
    <div className="px-4 md:px-[100px] h-screen overflow-hidden">
      <Header isAboveMediumScreens={isAboveMediumScreens} />
      <Main isAboveMediumScreens={isAboveMediumScreens} />
    </div>
  );
}

function Header({ isAboveMediumScreens }) {
  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center mt-5">
        <a>
          <Image
            alt="area-finder-logo"
            width={92}
            height={29}
            src="/logo.svg"
          />
        </a>
        <div className="sm:flex items-center">
          {isAboveMediumScreens ? <p>Welcome!</p> : ""}
          <Image
            className="rounded-full border-2 border-[#fff] w-8 h-8 object-cover"
            src="/images/user.jpeg"
            alt="user image"
            width={36}
            height={36}
          />
        </div>
      </div>
    </header>
  );
}

function Main({ isAboveMediumScreens }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };
  return (
    <div className="sm:grid grid-cols-2 sm:mt-6">
      <div className="mt-[195px] md:mt-[217px]  lg:mr-[177px] text-[#1e1e1e] mb-[245px] lg:max-w-[350px]">
        <p className="text-[40px] font-bold leading-[48px]">
          Find a place you will love to live!
        </p>
        <p className="text-base font-normal leading-[25.6px] mb-6">
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </p>

        <form>
          <div className="w-full max-w-md relative flex items-center text-[#484851]">
            <Image
              className="absolute ml-3 pointer-events-none"
              width={16}
              height={16}
              src="/msearch.svg"
              alt="search icon"
            />
            <input
              onChange={handleInputChange}
              value={searchText}
              name="search"
              autoComplete="off"
              aria-label="Enter Address"
              className="w-full focus:border-[#5378F6] pr-3 pl-10 rounded-lg py-4 px-3 bg-[#F3F7FE] text-[#101012] text-sm border border-[#d4dcf1]"
              placeholder="Enter Address"
            />
            {searchText && (
              <div
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <Image
                  width={16}
                  height={16}
                  src="/mcancel.svg"
                  alt="cancel icon"
                />
              </div>
            )}
          </div>
        </form>
        <button className="bg-[#3366FF] px-10 py-4 uppercase rounded-[6px] text-sm font-medium  text-[#FFFFFF] mt-2">
          Search
        </button>
      </div>
      {isAboveMediumScreens ? <ReviewCollection /> : ""}
    </div>
  );
}

function ReviewCollection() {
  return (
    <div className="gradient-mask-t-[transparent,rgba(0,0,0,0.5)_100px,rgba(0,0,0,1.0)_70%] grid md:grid-cols-1 lg:grid-cols-2 gap-2 sm:ml-20 bg-[#D9D9D9] h-screen overflow-scroll [scrollbar-width:none]">
      <VerticalSlider>
        <div className="mb-2">
          <ReviewCard issue="/traffic.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/traffic.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/network.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/traffic.svg" />
        </div>
      </VerticalSlider>
      <VerticalSlider>
        <div className="mb-2">
          <ReviewCard issue="/power.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/water.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/security.svg" />
        </div>
        <div className="mb-2">
          <ReviewCard issue="/road.svg" />
        </div>
      </VerticalSlider>
    </div>
  );
}

function ReviewCard({ issue }) {
  return (
    <div className="w-[239px] bg-[#FAFCFD]  rounded-[15px] p-4">
      <div className="flex justify-between mb-1">
        <div className="flex gap-1">
          <Image
            className="rounded-full object-cover w-6 h-6"
            src="/images/user-rev.jpeg"
            alt="client image"
            height={25}
            width={25}
          />
          <div>
            <p className="text-xs font-medium leading-[14.52px]">James T.</p>
            <p className="text-[8px] font-light leading-[9.68px]">
              5 months ago
            </p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium leading-[15.4px]">
            Ikate,Lekki
          </p>
          <Image
            src="/multistar.svg"
            alt="rating star"
            width={60}
            height={12}
          />
        </div>
      </div>
      <p className="text-[14px] font-normal leading-[19.6px] mb-1">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are several grocery stores and
        Supermarkets.
      </p>
      <div className="flex justify-between items-center">
        <Image
          src="/revicon.svg"
          width={118}
          height={18}
          alt="review reactions"
        />
        <Image src={issue} width={51} height={14} alt="issue" />
      </div>
    </div>
  );
}
