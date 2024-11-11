import React from "react";

const EditableField = ({
  value,
  onChange,
  isEditing,
  size,
}: {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  size: "xl" | "m";
}) => {
  const textClass = size === "xl" ? "text-xl font-bold" : "text-m";

  return (
    <div className={`w-full flex justify-start`}>
      {isEditing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${textClass} text-left border w-full focus:outline-none py-0.5 px-2`}
        />
      ) : (
        <p className={`${textClass} text-left w-full py-0.5 ml-[9px] my-[1px]`}>
          {value || <br />}
        </p>
      )}
    </div>
  );
};

export default EditableField;
