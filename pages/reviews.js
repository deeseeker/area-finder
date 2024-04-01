import Modal from "@/components/Modal";
import ReviewSubmitted from "@/components/ReviewSubmitted";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";

const initData = [
  {
    rating: 4.0,
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  },
  {
    rating: 4.0,
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  },
  {
    rating: 4.0,
    review:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  },
];

export default function AllReview() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 500px)");
  return (
    <div>
      <Header isAboveMediumScreens={isAboveMediumScreens} />
      <MainReviews isAboveMediumScreens={isAboveMediumScreens} />
    </div>
  );
}

function Header({ isAboveMediumScreens }) {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [data, setData] = useState(initData);
  const newReview = { rating, review };
  console.log(newReview);

  useEffect(() => {
    const storedData = localStorage.getItem("reviews");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(initData);
    }
  }, []);

  const handleShowSubmit = () => {
    const updatedData = [...data, newReview];
    setData(updatedData);
    localStorage.setItem("reviews", JSON.stringify(updatedData));
    setShowSubmit(true);
  };

  console.log(data);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };
  return isAboveMediumScreens ? (
    <>
      <header className="px-[100px] py-4 bg-[#F2F6FD]">
        <div className="grid grid-cols-[92px_1fr_125px] content-center mb-4">
          <a>
            <Image
              alt="area-finder-logo"
              width={92}
              height={29}
              src="/logo.svg"
              className="my-[10.5px]"
            />
          </a>
          <form>
            <div className="ml-10 mr-[8rem] relative flex items-center text-[#484851]">
              <Image
                className="absolute ml-3 pointer-events-none"
                width={16}
                height={16}
                src="/search.svg"
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
          <div className="flex items-center gap-3">
            <span>Welcome!</span>
            <Image
              className="my-[9px] rounded-full border-2 border-[#fff] w-8 h-8 object-cover"
              src="/images/user.jpeg"
              alt="user image"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_210px_repeat(2,_50px)] md:grid-rows-1 gap-4 content-center mb-4">
          <div>
            <h1 className="text-2xl font-medium leading-[19.2px]">
              {searchText
                ? searchText
                : "Bonny and Clyde Street, Ajao Estate, Lagos"}
            </h1>
            <p className="text-base leading-[24px] font-medium">
              <span className="font-semibold">“450”</span> Reviews{" "}
              <span className="font-normal">
                (People are raving about the selected location)
              </span>
            </p>
          </div>
          <button
            onClick={showModal}
            className="bg-[#3366FF] h-[50px] px-10 py-4 uppercase rounded-[6px] text-sm font-medium  text-[#FFFFFF]"
          >
            leave a review
          </button>

          <Image
            className="h-[50px]"
            src="/bookmark.svg"
            width={56}
            height={50}
            alt="bookmark"
          />
          <Image
            className="h-[50px]"
            src="/share.svg"
            width={56}
            height={50}
            alt="share"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm font-normal leading-[16.1px]">
          <span className="cat-label">Schools</span>
          <span className="cat-label">Hospitals</span>
          <span className="cat-label">Resort Park</span>
          <span className="cat-label">Shopping Malls</span>
          <span className="cat-label">Airport</span>
          <span className="cat-label">Train Station</span>
          <span className="cat-label">Nightlife</span>
          <span className="cat-label">Public Wifi</span>
          <span className="cat-label">Parking Lot</span>
          <span className="cat-label">Security</span>
          <span className="cat-label">Public Transport</span>
          <span className="cat-label">Bus Station</span>
          <span className="cat-label">Quiet</span>
          <Image
            src="/chevron-right.svg"
            alt="click more"
            width={24}
            height={24}
          />
        </div>
        {isModalOpen && (
          <Modal
            onSubmit={handleShowSubmit}
            onOk={handleOk}
            onCancel={handleCancel}
            onReview={setReview}
            review={review}
            onSetRating={setRating}
          />
        )}
      </header>
      {showSubmit && <ReviewSubmitted />}
    </>
  ) : (
    <>
      <header className="mb-4 px-4">
        <div className="mb-2 flex items-center justify-between">
          <a>
            <Image
              alt="area-finder-logo"
              width={92}
              height={29}
              src="/logo.svg"
              className="my-[10.5px]"
            />
          </a>
          <Image
            className="my-[9px] rounded-full h-8 w-8 object-cover"
            src="/images/user.jpeg"
            alt="user image"
            width={32}
            height={32}
          />
        </div>
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
              name="search"
              autoComplete="off"
              aria-label="Enter Address"
              className="w-full focus:border-[#5378F6] pr-3 pl-10 rounded-lg py-4 px-3 bg-[#F3F7FE] text-[#101012] text-sm border border-[#d4dcf1] [grid-area:2_/_1_/_3_/_3]"
              placeholder="Enter Address"
            />
            <Image
              className="absolute right-4"
              width={16}
              height={16}
              src="/mcancel.svg"
              alt="cancel icon"
            />
          </div>
        </form>
        <div className="mb-4">
          <h1 className="text-base font-medium leading-[19.2px] mb-1">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </h1>
          <p className="text-xs font-medium leading-[18px]">
            <span className="font-semibold">“450”</span> Reviews{" "}
            <span className="font-normal">
              (People are raving about the selected location)
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="cat-label">Schools</span>
          <span className="cat-label">Hospitals</span>
          <span className="cat-label">Airport</span>
          <span className="cat-label">Gym</span>
          <span className="cat-label">Park</span>
          <span className="cat-label">Wifi</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={showModal}
            className="bg-[#3366FF] px-10 py-4 uppercase rounded-[6px] text-sm font-medium  text-[#FFFFFF]"
          >
            leave a review
          </button>
          <Image src="/bookmark.svg" width={56} height={50} alt="bookmark" />
          <Image src="/share.svg" width={56} height={50} alt="share" />
        </div>
        {isModalOpen && (
          <Modal
            onSubmit={handleShowSubmit}
            onOk={handleOk}
            onCancel={handleCancel}
            onReview={setReview}
            review={review}
            onSetRating={setRating}
          />
        )}
      </header>
      {showSubmit && <ReviewSubmitted />}
    </>
  );
}

function MainReviews({ isAboveMediumScreens }) {
  return (
    <section>
      {isAboveMediumScreens ? (
        <div className="flex gap-4 px-[100px] py-4">
          <ReviewList />
          <div className="grid grid-cols-[repeat(2,_235px)] grid-rows-[repeat(2,_224px)] gap-2">
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-1.jpeg"
              width={235}
              height={224}
              alt="area-1"
            />
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-2.jpeg"
              width={235}
              height={224}
              alt="area-2"
            />
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-3.jpeg"
              width={235}
              height={224}
              alt="area-3"
            />
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-4.jpeg"
              width={235}
              height={224}
              alt="area-4"
            />
          </div>
        </div>
      ) : (
        <div className="px-4">
          <div className="grid grid-cols-[175px_160px] auto-rows-[110px] gap-2 mb-6">
            <Image
              className="rounded-lg row-span-2 h-full w-full  object-cover"
              src="/images/img-1.jpeg"
              width={235}
              height={224}
              alt="area-1"
            />
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-2.jpeg"
              width={235}
              height={224}
              alt="area-2"
            />
            <Image
              className="rounded-lg h-full w-full object-cover"
              src="/images/img-3.jpeg"
              width={235}
              height={224}
              alt="area-3"
            />
          </div>
          <ReviewList />
        </div>
      )}
    </section>
  );
}

function ReviewList() {
  return (
    <ul>
      <li>
        <Review />
      </li>
      <li>
        <Review />
      </li>
      <li>
        <Review />
      </li>
      <li>
        <Review />
      </li>
      <li>
        <Review />
      </li>
    </ul>
  );
}
function Review() {
  return (
    <div className="pb-4 border-b border-[#D9D9D9] mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full object-cover w-6 h-6"
            src="/images/user-rev.jpeg"
            width={24}
            height={24}
            alt="reviewer image"
          />
          <span>James T.</span>
          <span>5 months ago</span>
        </div>
        <div className="flex items-center">
          {" "}
          <Image
            src="/star.svg"
            width={12}
            height={12}
            alt="star rating icon"
          />{" "}
          <span className="ml-[2px]">4.0</span>
        </div>
      </div>
      <p className="text-[16px] font-normal leading-[24px]">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are several grocery stores and
        Supermarkets.
      </p>
      <div className="flex items-center gap-8 text-[#0D2159]">
        <div className="flex items-center">
          <Image src="/like.svg" width={24} height={24} alt="like icon" />
          <span>1000</span>
        </div>
        <div className="flex items-center">
          <Image src="/dislike.svg" width={24} height={24} alt="dislike icon" />
          <span>24</span>
        </div>
        <div className="flex items-center">
          <Image src="/comment.svg" width={24} height={24} alt="comment icon" />
          <span>24</span>
        </div>
      </div>
    </div>
  );
}
