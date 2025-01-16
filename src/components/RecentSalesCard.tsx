import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Sale {
  name: string;
  email: string;
  amount: string;
  avatar?: string; // Optional avatar URL
}

interface RecentSalesProps {
  title: string;
  description: string;
  sales: Sale[];
}

const RecentSalesCard: React.FC<RecentSalesProps> = ({
  title,
  description,
  sales,
}) => {
  return (
    <Card className="bg-[#1c64f2] text-white">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-gray-200">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sales.map((sale, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                  {sale.avatar ? (
                    <img
                      src={sale.avatar}
                      alt={sale.name}
                      className="rounded-full w-full h-full"
                    />
                  ) : (
                    <span className="text-white font-bold text-sm">
                      {sale.name[0].toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs text-gray-200">{sale.email}</p>
                </div>
              </div>
              <p className="text-sm font-semibold">{sale.amount}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
