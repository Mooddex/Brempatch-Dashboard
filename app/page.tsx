"use client"

import { ChartLineInteractive } from "@/components/ChartLine";
import { ChartTooltipDefault } from "@/components/ChartTooltip";
import { ChartPieLabel } from "@/components/CircleChart";
import DashboardCard from "@/components/DashboardCard";
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  Package,
  Activity,
  BarChart3,
  Plus
} from "lucide-react";
import { useMemo } from "react";

// Type definitions
interface DashboardData {
  totalSales: number;
  totalClients: number;
  totalProducts: number;
  monthlyGrowth: number;
  recentActivity: number;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  colorScheme: string;
  onClick: () => void;
}

export default function Home() {
  // Sample data - in a real app, this would come from props, context, or API
  const dashboardData: DashboardData = {
    totalSales: 1280,
    totalClients: 1247,
    totalProducts: 856,
    monthlyGrowth: 12.5,
    recentActivity: 342
  };

  // Optimized formatting functions with proper error handling
  const formatCurrency = useMemo(() => 
    (value: number | string | bigint): string => {
      try {
        const numValue = typeof value === 'string' ? parseFloat(value) : Number(value);
        if (isNaN(numValue)) return '$0';
        
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(numValue);
      } catch (error) {
        console.warn('Currency formatting failed:', error);
        return '$0';
      }
    }, []
  );

  const formatNumber = useMemo(() => 
    (value: number | string | bigint): string => {
      try {
        const numValue = typeof value === 'string' ? parseFloat(value) : Number(value);
        if (isNaN(numValue)) return '0';
        
        return new Intl.NumberFormat('en-US').format(numValue);
      } catch (error) {
        console.warn('Number formatting failed:', error);
        return '0';
      }
    }, []
  );

  // Quick actions configuration
  const quickActions: QuickAction[] = useMemo(() => [
    {
      id: 'add-client',
      label: 'Add New Client',
      icon: <Users className="w-5 h-5" />,
      colorScheme: 'blue',
      onClick: () => {
        // Navigate to add client page or open modal
        console.log('Add new client');
      }
    },
    {
      id: 'add-product',
      label: 'Add Product',
      icon: <Package className="w-5 h-5" />,
      colorScheme: 'green',
      onClick: () => {
        // Navigate to add product page or open modal
        console.log('Add product');
      }
    },
    {
      id: 'view-reports',
      label: 'View Reports',
      icon: <BarChart3 className="w-5 h-5" />,
      colorScheme: 'purple',
      onClick: () => {
        // Navigate to reports page
        console.log('View reports');
      }
    },
    {
      id: 'activity-log',
      label: 'Activity Log',
      icon: <Activity className="w-5 h-5" />,
      colorScheme: 'orange',
      onClick: () => {
        // Navigate to activity log
        console.log('Activity log');
      }
    }
  ], []);

  // Color scheme mapping for quick actions
  const getColorClasses = (scheme: string) => {
    const colorMap = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    };
    return colorMap[scheme as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="transform hover:scale-105 transition-all duration-300">
            <DashboardCard
              title="Total Sales"
              value={formatCurrency(dashboardData.totalSales)}
              icon={<DollarSign className="w-6 h-6" />}
              trend={`+${dashboardData.monthlyGrowth}% from last month`}
              trendUp={true}
            />
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300">
            <DashboardCard
              title="Total Clients"
              value={formatNumber(dashboardData.totalClients)}
              icon={<Users className="w-6 h-6" />}
              trend="+47 new this week"
              trendUp={true}
            />
          </div>
          
          <div className="transform hover:scale-105 transition-all duration-300">
            <DashboardCard
              title="Total Products"
              value={formatNumber(dashboardData.totalProducts)}
              icon={<Package className="w-6 h-6" />}
              trend="23 out of stock"
              trendUp={false}
            />
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <DashboardCard
              title="Monthly Growth"
              value={`${dashboardData.monthlyGrowth}%`}
              icon={<TrendingUp className="w-6 h-6" />}
              trend="Above target"
              trendUp={true}
            />
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <DashboardCard
              title="Recent Activity"
              value={formatNumber(dashboardData.recentActivity)}
              icon={<Activity className="w-6 h-6" />}
              trend="Last 24 hours"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trends Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Sales Trends
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Monthly performance overview
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ChartLineInteractive />
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Category Distribution
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Product categories breakdown
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ChartPieLabel
                title="Category Distribution"
                discription="Distribution of products across different categories"
              />
            </div>
          </div>

          {/* Order Status Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Order Status Distribution
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Current order status breakdown
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ChartPieLabel
                title="Order Status Distribution"
                discription="Real-time order status tracking"
              />
            </div>
          </div>

          {/* Performance Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Performance Analytics
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Detailed performance metrics
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ChartTooltipDefault />
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <button
                key={action.id}
                onClick={action.onClick}
                className={`
                  flex items-center gap-3 p-4 rounded-lg transition-all duration-200 
                  transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${getColorClasses(action.colorScheme)}
                `}
                aria-label={action.label}
              >
                {action.icon}
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}