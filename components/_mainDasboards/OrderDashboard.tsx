"use client"

import { DataTable } from "@/components/Data-table"
import { columns } from "@/components/_columns/Orders-columns"
import { fetchOrders } from "@/lib/api"
import { useState, useEffect } from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import DashboardCard from "@/components/_cards/DashboardCard"
import { 
  DollarSign, 
  Package, 
  Warehouse, 
  Grid3X3, 
  TrendingUp,
  XCircle,
  Clock
} from "lucide-react"
import ResponsiveCard from "../_cards/ResponsiveDTCard"

export default function OrdersDashboard() {
  const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetchOrders()
        .then(setData)
        .catch(console.error)
        .finally(() => setLoading(false))
    }, [])


  const totalOrders = data.length
  const completedOrders = data.filter(order => order.status === 'confirmed').length
  const canceledOrders = data.filter(order => order.status === 'cancelled').length
  const pendingOrders = data.filter(order => order.status === 'pending').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Orders Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor and manage all your orders in one place
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="">
            <DashboardCard
              title="Orders"
              value={totalOrders}
              icon={<Package className="w-6 h-6" />}
            />
          </div>
          
          <div className="">
            <DashboardCard
              title="Completed"
              value={completedOrders}
              icon={<Warehouse className="w-6 h-6" />}
            />
          </div>
          
          <div className="">
            <DashboardCard
              title="Pending"
              value={pendingOrders}
              icon={<Clock className="w-6 h-6" />}
            />
          </div>
          
          <div className="">
            <DashboardCard
              title="Canceled"
              value={canceledOrders}
              icon={<XCircle className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Orders Table Card */}
        <div className="hidden sm:block">
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Package className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl font-bold">Orders Management</CardTitle>
                  <p className="text-blue-100 mt-1">
                    Complete list of all orders in your system
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-100">Last Updated</div>
                <div className="text-lg font-semibold">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardHeader>
          
         <CardContent className="p-6">
          {loading ? (
           <p className="text-center text-gray-500">Loading...</p>
            ) : (
            <DataTable columns={columns} data={data} />
            )}
          </CardContent>
        </Card>
        </div>
         {/* Mobile responsive card with popup */}
        <div className="sm:hidden">
          <ResponsiveCard title="Clients Table">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <DataTable data={data} columns={columns} />
            )}
          </ResponsiveCard>
        </div>
      </div>
    </div>
  )
}