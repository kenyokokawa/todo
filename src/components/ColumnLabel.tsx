import React, { FC } from "react";
type ColumnLabelProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
};

const ColumnLabel: FC<ColumnLabelProps> = ({
  label,
  backgroundColor = "green-400",
  textColor = "white",
}) => {
  return (
    <div className={`py-0.5 px-4 w-max rounded-lg ${backgroundColor} `}>
      <p className={`text-sm text-${textColor}`}>{label}</p>
    </div>
  );
};

export default ColumnLabel;
