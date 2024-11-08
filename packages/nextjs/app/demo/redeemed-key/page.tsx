"use client";

import React from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const goToRedeemedPage = () => {
    router.push("/demo/key-guide");
  };

  return (
    <div 
      className="flex w-full min-h-full mt-[125px] mb-[125px] justify-center items-center"
      onClick={goToRedeemedPage}
    >
      <div className="flex flex-col justify-start items-center gap-6 w-full overflow-y-auto mt-[-120px]">
        <div className="w-4/5 ">
          <div className="w-full rounded-2xl flex justify-center items-center p-4 aspect-h-1">
            <Image
              width={250}
              height={250}
              src="/demo/redeemed-key.png"
              alt="Square"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
