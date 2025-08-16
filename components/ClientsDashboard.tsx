"use client"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/Data-table"
import { columns } from "@/lib/clients/columns"
import { fetchClients } from "@/lib/api"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import DashboardCard from "@/components/DashboardCard"
import { Users, Globe, Mail, Phone } from "lucide-react"

export default function ClientsDashboard() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClients()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  // ✅ Stats
  const totalClients = data.length
  const countries = new Set(data.map(client => client.country)).size
  const gmailClients = data.filter(client => client.email.includes("@gmail.com")).length
  const totalCountries = data.filter(client => client.country).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Clients Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and view all your clients in one place
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Clients" value={totalClients} icon={<Users className="w-6 h-6" />} />
          <DashboardCard title="Unique Countries" value={countries} icon={<Globe className="w-6 h-6" />} />
          <DashboardCard title="Gmail Clients" value={gmailClients} icon={<Mail className="w-6 h-6" />} />
          <DashboardCard title="Total Countries" value={totalCountries} icon={<Phone className="w-6 h-6" />} />
        </div>

        {/* Clients Table */}
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl font-bold">Clients Management</CardTitle>
                  <p className="text-blue-100 mt-1">Complete list of all clients in your system</p>
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
    </div>
  )
}
