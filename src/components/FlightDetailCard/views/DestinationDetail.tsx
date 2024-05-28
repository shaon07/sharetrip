import FareCard from "./FareCard";
import Alert from "../../Alert";

type DestinationDetailProps = {
  isWarning?: boolean;
};

export default function DestinationDetail({
  isWarning = false,
}: DestinationDetailProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center flex-wrap gap-3 w-full">
        <FareCard title="DAC-DXB" description="12h 20m" className="flex-1" />
        <FareCard
          title="07:30 PM"
          description="28 Mar, Friday"
          className="flex-1"
        />
        <FareCard
          title="08:50 AM"
          description="29 Mar, Saturday"
          className="flex-1"
        />
      </div>

      <div className="flex items-center flex-wrap gap-3 w-full max-w-[31rem]">
        <FareCard
          title={
            <span className="text-sm text-dark-100">Turkish Airlines</span>
          }
          description="Flight no : TUR467"
          className="flex-1"
        />
        <FareCard
          title={
            <span className="text-sm text-gray-400 font-normal">
              Airbus Industrie 737-800-738
            </span>
          }
          description={
            <span>
              Class :{" "}
              <strong className="font-medium text-dark-100 text-base">
                ECONOMY-Y (O)
              </strong>
            </span>
          }
          className="flex-1"
        />
      </div>

      {isWarning && (
        <div className="mt-1">
          <Alert
            type="warning"
            description="Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality"
          />
        </div>
      )}
    </div>
  );
}
