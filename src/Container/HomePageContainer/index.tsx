import Breadcrumb from "../../components/BreadCrumb";
import FlightDetails from "./views/FlightDetails";

export default function HomePageContainer() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Breadcrumb />
      <FlightDetails />
    </div>
  )
}
