import { IoMdPin } from "react-icons/io";
import DestinationTitle, {
  DestinationTitleProps,
} from "../views/DestinationTitle";

type FlightRouteProps = DestinationTitleProps;

export default function FlightRoute({
  to,
  from,
  type = "primary",
  className = "",
}: FlightRouteProps) {
  return (
    <div className={`${className} flex items-center gap-2 mt-3`}>
      <span>
        <IoMdPin size={20} color="#6B7280" />
      </span>
      <DestinationTitle type={type} from={from} to={to} />
    </div>
  );
}
