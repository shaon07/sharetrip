import TimeLine from "../../../assets/timeline.png";
import plan from "../../../assets/Emirates.png";

export default function FlightTimeLine() {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={plan}
        width={24}
        height={24}
        className="w-6 h-6 object-cover"
        alt="time"
      />
      <img src={TimeLine} width={30} height={30} className="w-5 h-full object-cover" alt="time" />
    </div>
  );
}
