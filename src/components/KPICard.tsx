import React from "react";

interface KPICardProps {
  title: string;
  value: string | number;
  change: string;
  description: string;
  icon?: React.ReactNode; // Optional: for including an icon
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#1c64f2] text-white p-6 rounded-lg shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        {icon && <div className="text-xl">{icon}</div>}
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p
        className={`text-sm ${
          change.startsWith("+") ? "text-gray-200" : "text-red-500"
        }`}
      >
        {change}
      </p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default KPICard;
