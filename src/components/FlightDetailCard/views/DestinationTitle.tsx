import { ReactNode } from "react";

type DestinationTitleProps = {
    from: string | ReactNode;
    to: string | ReactNode;
    type?: "primary" | "secondary";
    className?: string;
}
export default function DestinationTitle({from, to, type="primary", className=""}:DestinationTitleProps) {
  return (
    <div className={`${type === "primary" ? "bg-gray-light-100":"bg-gray-100"} p-3 rounded-md w-full flex items-center justify-between ${className}`}>
      <span className='text-dark font-medium text-sm'>
        {from}
      </span>
      <span className='text-sm text-gray-400'>
        {to}
      </span>
    </div>
  )
}


