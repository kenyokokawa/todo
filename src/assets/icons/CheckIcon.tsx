import React from "react";

const CheckIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6.73684L5.85714 11L14 2"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CheckIcon;
