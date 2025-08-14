import { ChartLineInteractive } from "@/components/ChartLine";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Sales"
            count={10000}
            icon={<DollarSign />}
          />
          <DashboardCard
            title="Total Clients"
            count={1045845850}
            icon={<Users />}
          />
          <DashboardCard
            title="Total Products"
            count={10000}
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
            <ChartPieLabel />
            Placeholder for Pie Chart or Bar Chart
          </div>
        </div>
      </div>
    </div>
  );
}

