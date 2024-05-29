import  { ReactNode } from "react";

type FareCardProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  className?: string;
};
export default function FareCard({ title, description, className="" }: FareCardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-dark font-medium">{title}</span>
      <span className="text-gray-400 font-normal text-sm">{description}</span>
    </div>
  );
}
