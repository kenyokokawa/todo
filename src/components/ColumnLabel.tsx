import { Badge } from "@/components/ui/badge";
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
    <div className="flex justify-start items-center">
      <Badge className={`${backgroundColor} text-${textColor}`} >{label}</Badge>
    </div>
  );
};

export default ColumnLabel;
