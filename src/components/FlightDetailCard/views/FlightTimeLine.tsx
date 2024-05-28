import plan from "../../../assets/Emirates.png";
import { RiPlaneLine } from "react-icons/ri";

export default function FlightTimeLine() {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={plan}
        width={100}
        height={100}
        className="w-6 h-5 object-cover"
        alt="time"
      />

      <div className="w-full h-full flex flex-col items-center gap-2">
        <hr className="w-[2px] flex-1 bg-gray-400" />
        <RiPlaneLine size={20} color="gray" className="rotate-180" />
        <hr className="w-[2px] flex-1 bg-gray-400" />
      </div>
      {/* <img src={TimeLine} width={30} height={30} className="w-5 h-full object-cover" alt="time" /> */}
    </div>
  );
}
