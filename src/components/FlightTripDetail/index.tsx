import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

type FlightTripDetailProps = {
    to: string;
    from: string;
    tripType: string;
    date: string;
    stops: number;
}

export default function FlightTripDetail({to, from, tripType, date, stops}:FlightTripDetailProps) {
  return (
    <div className="flex flex-col">
      <span className="flex items-center gap-1 text-lg font-semibold">
        {from} <FaArrowRight size={14} /> {to}
      </span>
      <span className="flex items-center text-sm font-normal text-gray-400">
        {tripType} Trip <LuDot /> {date} <LuDot /> {stops} Stop
      </span>
    </div>
  );
}
