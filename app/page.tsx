import DashboardCard from "@/components/_cards/DashboardCard"
import {
  DollarSign,
  Users,
  TrendingUp,
  Package,
  Activity,
  BarChart3,
} from "lucide-react"
import QuickActionSection from "@/components/_cards/QuickAction"
import { TotalProductsCard } from "@/components/_cards/TotalProducts"
import { TotalClientsCard } from "@/components/_cards/TotalClients"
import { ChartsCard } from "@/components/charts/ChartsCard"



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <DashboardCard
          title="Sales"
          value="$1,280"
          icon={<DollarSign />}
          trend="+12.5% from last month"
          trendUp
        />
        <TotalClientsCard />
        <TotalProductsCard />
        <DashboardCard
          title="Growth"
          value="12.5%"
          icon={<TrendingUp />}
          trend="Above target"
          trendUp
        />
        <DashboardCard
          title="Activity"
          value="342"
          icon={<Activity />}
          trend="Last 24 hours"
        />
      </div>

      {/* Charts */}
     <ChartsCard />

      {/* Quick Actions */}
    <QuickActionSection />
    </div>
  )
}
