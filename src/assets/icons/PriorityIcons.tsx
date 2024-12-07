import React from "react";

const LowPriorityIcon = ({
  size,
  color = "blue",
}: {
  size: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="6" x2="12" y2="18" stroke={color} strokeWidth="3" />
      <line x1="6" y1="12" x2="13" y2="19" stroke={color} strokeWidth="3" />
      <line x1="18" y1="12" x2="11" y2="19" stroke={color} strokeWidth="3" />
    </svg>
  );
};

const MediumPriorityIcon = ({
  size,
  color = "orange",
}: {
  size: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="6" x2="12" y2="18" stroke={color} strokeWidth="3" />
      <line x1="6" y1="12" x2="13" y2="5" stroke={color} strokeWidth="3" />
      <line x1="18" y1="12" x2="11" y2="5" stroke={color} strokeWidth="3" />
    </svg>
  );
};

const HighPriorityIcon = ({
  size,
  color = "red",
}: {
  size: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="5" x2="12" y2="14" stroke={color} strokeWidth="3" />
      <circle cx="12" cy="18" r="2" fill={color} />
    </svg>
  );
};

export { LowPriorityIcon, MediumPriorityIcon, HighPriorityIcon };
