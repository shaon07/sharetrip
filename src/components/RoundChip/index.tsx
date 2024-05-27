import React from "react";

type RoundChipProps = {
    children: React.ReactNode;
};

export default function RoundChip({children}:RoundChipProps) {
  return (
    <span className="text-white bg-primary w-4 h-4 text-base p-4 rounded-full flex items-center justify-center">
      {children}
    </span>
  );
}
