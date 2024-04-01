import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MultiSelect({ setSelectedFeatures }) {
  const features = [
    "Parking Lot",
    "Nightlife",
    "Hospital",
    "Adult Home",
    "Schools",
    "free Wi-Fi",
    "Pet Store",
    "Childcare",
    "Gym",
    "Security",
    "Parking Lot",
    "Nightlife",
    "Hospital",
    "Adult Home",
    "Schools",
    "free Wi-Fi",
    "Pet Store",
    "Childcare",
    "Gym",
    "Security",
    "Parking Lot",
    "Nightlife",
    "Hospital",
    "Adult Home",
    "Schools",
  ];
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const numIndexes = Object.keys(features).length;
  const initialSelectedStates = {};

  for (let i = 0; i < numIndexes; i++) {
    initialSelectedStates[i] = false;
  }

  const [selectedStates, setSelectedStates] = useState(initialSelectedStates);

  const handleCheckboxChange = (index) => {
    setSelectedStates({
      ...selectedStates,
      [index]: !selectedStates[index],
    });
  };
  const selectedKeys = Object.keys(selectedStates).filter(
    (key) => selectedStates[key]
  );
  const numFeat = Object.values(selectedStates).filter(Boolean).length;
  const selectedFeat = selectedKeys.map((key) => features[key]);
  const handleSelectedFeature = () => {
    setSelectedFeatures(selectedFeat);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (e.target !== dropdownRef) {
        setIsDropdownDisplayed(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <div className="relative">
      <button
        className="border-none bg-[#F3F7FE] w-[311px] h-[50px] text-[#1e1e1e] flex justify-between px-2 rounded-md items-center"
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownDisplayed((prevState) => !prevState);
        }}
      >
        {numFeat > 0 ? (
          `${numFeat} item(s) selected`
        ) : (
          <p className="text-sm font-normal leading-[16.1px]">
            Select Amenities
          </p>
        )}
        <Image src="/dropdown.svg" width={16} height={16} alt="dropdown" />
      </button>
      {isDropdownDisplayed && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={dropdownRef}
          className="absolute bg-[#F3F7FE] border-[1px] border-[solid] border-[#D4DCF1] rounded-md w-[311px] h-[323px]  text-[#1e1e1e] overflow-y-auto px-2"
        >
          {features.map((feature, index) => (
            <fieldset
              key={index}
              className="block text-sm font-normal leading-[20px]"
            >
              <input
                onChange={() => handleCheckboxChange(index)}
                id={`input-${index}`}
                className="mr-3"
                type="checkbox"
                checked={selectedStates[index] || false}
              />
              <label htmlFor={`input-${index}`}>{feature}</label>
            </fieldset>
          ))}
        </div>
      )}
    </div>
  );
}
