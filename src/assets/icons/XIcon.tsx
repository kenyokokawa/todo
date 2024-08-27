import React from "react";

const XIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L12 12"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 2L2 12"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default XIcon;
