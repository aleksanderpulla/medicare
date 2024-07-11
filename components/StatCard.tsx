import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface StatCardProps {
  type: "appointments" | "pending" | "canceled";
  count: number;
  label: string;
  icon: string;
}

const StatCard = ({ type, count = 0, label, icon }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-pending": type === "pending",
        "bg-canceled": type === "canceled",
        "bg-appointments": type === "appointments",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt="label"
          width={32}
          height={32}
          className="size-8 w-fit"
        />
      </div>
    </div>
  );
};

export default StatCard;
