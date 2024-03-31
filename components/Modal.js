import React, { useState } from "react";
import MultiSelect from "./MultiSelect";
import Image from "next/image";
import ReviewSubmitted from "./ReviewSubmitted";

function Modal({ onSubmit, onOk, onCancel }) {
  return (
    <div className="fixed inset-0 bg-opacity-100 flex justify-center items-center bg-[#1D3045]">
      <div className="w-[343px] min-h-screen rounded-xl bg-[white] p-4">
        <div>
          <h1 className="font-medium text-lg leading-[24px] text-center my-4">
            Review location
          </h1>
          <p className="text-[20px] font-medium leading-[24px] mt-4 mb-8">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </p>
          <MultiSelect />
          <p className="mb-3.5 mt-4 font-medium text-sm leading-[16.94px]">
            Rate location
          </p>
          <Image
            src="/multistar.svg"
            width={136}
            height={24}
            alt="star review"
            className="mb-4"
          />
          <label className="text-sm font-normal leading-[16.94px] mb-3.5">
            Write Review
          </label>
          <textarea
            placeholder=""
            className="w-[311px] min-h-44 p-3 rounded-md border-[1px] border-[solid] border-[#D4DCF1] mb-4"
          />

          <fieldset>
            <input
              className="mr-[1.5px] text-sm font-normal text-[#484851] leading-[16.94px]"
              type="checkbox"
            />
            <label>Post as Anonymous</label>
          </fieldset>
          <div className="flex gap-6 mt-4 font-medium text-base mb-10">
            <button
              onClick={() => {
                onSubmit();
              }}
              className="bg-[#3366FF] text-center uppercase rounded-md w-[144px] h-[50px] py-4 px-10 text-[#FFF]"
            >
              submit
            </button>
            <button
              onClick={() => onCancel()}
              className="border-[0.5px] uppercase text-center border-[solid] w-[144px] h-[50px] rounded-md border-[#5378F6] text-[#3366FF] font-medium text-base"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
