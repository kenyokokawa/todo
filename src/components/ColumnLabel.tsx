import React, { FC } from "react";
type ColumnLabelProps = {
  label: string;
  color?: string;
  textColor?: string;
};

const ColumnLabel: FC<ColumnLabelProps> = ({
  label,
  color = "green-400",
  textColor = "white",
}) => {
  return (
    <div className={`py-0.5 px-3 w-max rounded-lg bg-${color} `}>
      <p className={`text-sm text-${textColor}`}>{label}</p>
    </div>
  );
};

export default ColumnLabel;
