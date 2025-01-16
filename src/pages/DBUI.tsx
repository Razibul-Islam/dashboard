import DatePicker from "@/components/DatePicker";
import KPICard from "@/components/KPICard";
import RecentSalesCard from "@/components/RecentSalesCard";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function DBUI() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
    },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
  ];

  return (
    <div className="w-full h-full px-5">
      <div className="w-full h-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center justify-between gap-5">
            <DatePicker className="mt-4" />
            <Button className="mt-4 bg-[#1c64f2] hover:bg-[#1c64f2]/90">
              Download
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <KPICard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1% from last month"
            description="Revenue generated"
          />
          <KPICard
            title="Subscriptions"
            value="+2,350"
            change="+180.1% from last month"
            description="New subscriptions"
          />
          <KPICard
            title="Sales"
            value="+12,234"
            change="+19% from last month"
            description="Products sold"
          />
          <KPICard
            title="Active Now"
            value="+573"
            change="+201 since last hour"
            description="Currently active users"
          />
        </div>
      </div>
      <div className="w-full h-full flex gap-6">
        <ChartContainer config={chartConfig} className="h-full w-3/5">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="w-2/5 h-full">
          <RecentSalesCard
            title="Recent Sales"
            description="You made 265 sales this month."
            sales={recentSales}
          />
        </div>
      </div>
    </div>
  );
}
