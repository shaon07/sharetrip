import DestinationTitle from "./views/DestinationTitle";
import { IoMdPin } from "react-icons/io";
import FlightTimeLine from "./views/FlightTimeLine";
import DestinationDetail from "./views/DestinationDetail";

export default function FlightDetailCard() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center gap-4">
        <span>
          <IoMdPin size={20} color="#6B7280" />
        </span>
        <DestinationTitle
          type="secondary"
          from="Departure from Dhaka"
          to={
            <span>
              <strong className="font-medium text-dark">
                Terminal 1:&nbsp;
              </strong>{" "}
              Hazrat Shahjalal International Airport
            </span>
          }
        />
      </div>

      <div className="flex items-between gap-3 mt-3">
        <FlightTimeLine />
        <DestinationDetail isWarning />
      </div>

      <div className="flex items-center gap-4 mt-3">
        <span>
          <IoMdPin size={20} color="#6B7280" />
        </span>
        <DestinationTitle
          type="secondary"
          from="Departure from Dhaka"
          to={
            <span>
              <strong className="font-medium text-dark">
                Terminal 1:&nbsp;
              </strong>{" "}
              Hazrat Shahjalal International Airport
            </span>
          }
        />
      </div>

      <div className="flex items-between gap-3 mt-3">
        <FlightTimeLine />
        <DestinationDetail />
      </div>

      <div className="flex items-center gap-4 mt-3">
        <span>
          <IoMdPin size={20} color="#1882FF" />
        </span>
        <DestinationTitle
          type="primary"
          from="Departure from Dhaka"
          to={
            <span>
              <strong className="font-medium text-dark">
                Terminal 1:&nbsp;
              </strong>{" "}
              Hazrat Shahjalal International Airport
            </span>
          }
        />
      </div>
    </div>
  );
}
