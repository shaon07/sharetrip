import React from "react";

type ChipProps = {
    children: React.ReactNode;
};

export default function Chip({children}:ChipProps) {
  return (
    <span className="bg-gray-light-100 text-primary text-xs font-medium me-2 px-2.5 py-0.5 rounded-full leading-5">
      {children}
    </span>
  );
}
