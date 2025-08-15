import { ChartLineInteractive } from "@/components/ChartLine";
import { ChartTooltipDefault } from "@/components/ChartTooltip";
import { ChartPieLabel } from "@/components/CircleChart";
import DashboardCard from "@/components/DashboardCard";
import Navbar from "@/components/Navbar";
import { DollarSign, ShoppingBag, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Navbar */}
      <div className="mb-6">
        <Navbar />
      </div>

      <div className="px-6 space-y-6">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-6">
          <DashboardCard
            title="Total Sales"
            value={10000}
            icon={<DollarSign />}
          />
          <DashboardCard
            title="Total Clients"
            value={1000}
            icon={<Users />}
          />
          <DashboardCard
            title="Total Products"
            value={10000}
            icon={<ShoppingBag />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md">
            <ChartLineInteractive />
          </div>

          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md">
            {/* You can add another chart or table here */}
            <ChartPieLabel
            title="Category Distrpution"
            discription=""
            />
          </div>
           <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md">
            {/* You can add another chart or table here */}
            <ChartPieLabel
            title="Order Status Distrbution"
            discription=""

            />
          </div>
          <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md">
            {/* You can add another chart or table here */}
            <ChartTooltipDefault />
          </div>
          
        </div>
      </div>
    </div>
  );
}

