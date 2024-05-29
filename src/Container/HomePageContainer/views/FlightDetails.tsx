/* eslint-disable @typescript-eslint/no-explicit-any */
import RoundChip from "../../../components/RoundChip";
import FlightTripDetail from "../../../components/FlightTripDetail";
import Chip from "../../../components/Chip";
import FlightDetailCard from "../../../components/FlightDetailCard";

type FlightDetailsProps = {
  flightData: any
}

export default function FlightDetails({flightData}:FlightDetailsProps) {
  return (
    <div className="bg-white rounded-md w-full max-w-[840px]">
      <div className="flex items-center gap-4 p-4">
        <RoundChip>1</RoundChip>
        <div className="flex items-center justify-between w-full">
          <FlightTripDetail
            from={flightData?.from}
            to={flightData?.to}
            tripType={flightData?.tripType}
            date={`${flightData?.start_date} - ${flightData?.end_date} ${flightData?.year}`}
            stops={flightData?.stops}
          />
          <Chip>
            {flightData?.total_duration}
          </Chip>
        </div>
      </div>
      <hr className="bg-gray-200 h-[2px] mt-2" />

      <div>
        <FlightDetailCard flightData={flightData} />
      </div>
    </div>
  );
}
