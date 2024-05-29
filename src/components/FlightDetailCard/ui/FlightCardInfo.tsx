import FlightTimeLine from "../views/FlightTimeLine";
import DestinationDetail from "../views/DestinationDetail";

type FlightCardInfoProps = {
  warning?: boolean | string;
};

export default function FlightCardInfo({
  warning = false,
}: FlightCardInfoProps) {
  return (
    <div className="flex items-between gap-3 mt-3">
      <FlightTimeLine />
      <DestinationDetail warning={warning} />
    </div>
  );
}
