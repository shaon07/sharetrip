import Breadcrumb from "../../components/BreadCrumb";
import { ticket } from "../../resource/ticket";
import { checkArray } from "../../utils";
import FlightDetails from "./views/FlightDetails";

export default function HomePageContainer() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Breadcrumb />
      {checkArray(ticket) &&
        ticket?.map((ticket) => (
          <FlightDetails key={ticket._id} flightData={ticket} />
        ))}
    </div>
  );
}
