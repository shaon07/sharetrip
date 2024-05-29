import FlightCardInfo from "./FlightCardInfo";

type TicketDataProps = {
  warning?: boolean | string;
};

export default function TicketData({warning}:TicketDataProps) {
  return <FlightCardInfo warning={warning} />;
}
