"use client"

import SectionCard from "@/components/_cards/SectionCard"
import { ChartLineInteractive } from "@/components/charts/ChartLine"
import { ChartTooltipDefault } from "@/components/charts/ChartTooltip"
import { ChartPieLabel } from "@/components/charts/CircleChart"
import DashboardCard from "@/components/_cards/DashboardCard"
import {
  DollarSign,
  Users,
  TrendingUp,
  Package,
  Activity,
  BarChart3,
} from "lucide-react"



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
        <DashboardCard
          title="Clients"
          value="1,247"
          icon={<Users />}
          trend="+47 new this week"
          trendUp
        />
        <DashboardCard
          title="Products"
          value="856"
          icon={<Package />}
          trend="23 out of stock"
          trendUp={false}
        />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          icon={<BarChart3 className="text-blue-600" />}
          title="Sales Trends"
          subtitle="Monthly performance"
        >
          <ChartLineInteractive />
        </SectionCard>

        <SectionCard
          icon={<Package className="text-green-600" />}
          title="Category Distribution"
          subtitle="Product breakdown"
        >
          <ChartPieLabel title="Category Distribution" discription="Products across categories" />
        </SectionCard>

        <SectionCard
          icon={<Activity className="text-purple-600" />}
          title="Order Status"
          subtitle="Current breakdown"
        >
          <ChartPieLabel title="Order Status" discription="Real-time tracking" />
        </SectionCard>

        <SectionCard
          icon={<TrendingUp className="text-orange-600" />}
          title="Performance Analytics"
          subtitle="Detailed metrics"
        >
          <ChartTooltipDefault />
        </SectionCard>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <button className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 text-blue-600 hover:scale-105 transition cursor-pointer">
            <Users />
            <span>Add Client</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-green-50 text-green-600 hover:scale-105 transition cursor-pointer">
            <Package />
            <span>Add Product</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-purple-50 text-purple-600 hover:scale-105 transition cursor-pointer">
            <BarChart3 />
            <span>View Reports</span>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-orange-50 text-orange-600 hover:scale-105 transition cursor-pointer">
            <Activity />
            <span>Activity Log</span>
          </button>
        </div>
      </div>
    </div>
  )
}
