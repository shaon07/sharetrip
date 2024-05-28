import RoundChip from "../../../components/RoundChip";
import FlightTripDetail from "../../../components/FlightTripDetail";
import Chip from "../../../components/Chip";
import FlightDetailCard from "../../../components/FlightDetailCard";

export default function FlightDetails() {
  return (
    <div className="bg-white rounded-md w-full max-w-[840px]">
      <div className="flex items-center gap-4 p-4">
        <RoundChip>1</RoundChip>
        <div className="flex items-center justify-between w-full">
          <FlightTripDetail
            from="DAC"
            to="JFK"
            tripType="Round"
            date="25 Mar - 4 Apr"
            stops={1}
          />
          <Chip>33H 20m</Chip>
        </div>
      </div>
      <hr className="bg-gray-200 h-[2px] my-2" />

      <div>
        <FlightDetailCard />
      </div>
    </div>
  );
}
