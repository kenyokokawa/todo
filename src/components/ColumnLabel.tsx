import { Badge } from "@/components/ui/badge";
import React, { FC } from "react";
type ColumnLabelProps = {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  count?: number;
};

const ColumnLabel: FC<ColumnLabelProps> = ({
  label,
  backgroundColor = "green-400",
  textColor = "white",
  count,
}) => {
  return (
    <div className="flex justify-start items-center mt-6 mb-2">
      <Badge className={`${backgroundColor} text-${textColor} relative z-1`}>
        {label}
      </Badge>
      {count !== undefined && (
        <Badge className="bg-gray-200 text-gray-600 -ml-5 pl-6 ">{count}</Badge>
      )}
    </div>
  );
};

export default ColumnLabel;
