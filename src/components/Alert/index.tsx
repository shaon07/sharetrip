import { ReactNode } from "react";
import { IoIosAlert } from "react-icons/io";

type AlertProps = {
  type?: "warning" | "success";
  description?: string | ReactNode;
};

export default function Alert({
  type = "warning",
  description = "",
}: AlertProps) {
  return (
    <div
      className={`flex items-center gap-2 ${
        type === "warning" ? "bg-secondary-orange" : "bg-green-100"
      } p-2 rounded-md`}
    >
      <span>
        <IoIosAlert size={24} className="" color="#F27D00" />
      </span>
      <p className="text-dark text-[12px]">{description}</p>
    </div>
  );
}
