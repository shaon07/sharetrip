/* eslint-disable @typescript-eslint/no-explicit-any */
import FlightRoute from "./ui/FlightRoute";
import TicketData from "./ui/TicketData";

type FlightDetailCardProps = {
  flightData: any;
};

export default function FlightDetailCard({
  flightData,
}: FlightDetailCardProps) {
  const { departure, destination, layover } = flightData;
  return (
    <div className="bg-white p-4 rounded-md">
      <FlightRoute
        type="secondary"
        from={`Departure from ${departure?.from}`}
        to={
          <span>
            <strong className="font-medium text-dark">
              Terminal {departure?.terminal_number}:&nbsp;
            </strong>{" "}
            {departure?.terminal_name}
          </span>
        }
      />

      <TicketData warning={layover?.layover_detail} />

      {layover?.at && (
        <>
          <FlightRoute
            type="primary"
            from={`Layover at ${layover?.at}: ${layover?.duration}`}
            to={
              <span>
                {layover?.terminal_number && (
                  <strong className="font-medium text-dark">
                    Terminal {layover?.terminal_number}:&nbsp;
                  </strong>
                )}

                {layover?.terminal_name}
              </span>
            }
          />

          <TicketData />
        </>
      )}

      {destination?.to && (
        <FlightRoute
          type="secondary"
          isReached
          from={`Destination at ${destination?.to}`}
          to={
            <span>
              {destination?.terminal_number && (
                <strong className="font-medium text-dark">
                  Terminal {destination?.terminal_number}:&nbsp;
                </strong>
              )}
              {destination?.terminal_name}
            </span>
          }
        />
      )}
    </div>
  );
}
