import { DataTable } from "@/components/Data-table"
import { columns } from "@/lib/clients/columns"
import data from "@/data/clients.json" // direct import

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import DashboardCard from "@/components/DashboardCard"
import { 
  Users, 
  Globe, 
  Mail, 
  Phone 
} from "lucide-react"

export default function ClientsDashboard() {
  // ✅ Simple stats derived from clients.json
  const totalClients = data.length

  // Count unique countries
  const countries = new Set(data.map(client => client.country)).size

  // Example: clients with Gmail addresses
  const gmailClients = data.filter(client => client.email.includes("@gmail.com")).length

  // Example: clients with phone numbers starting with "1"
  const totalCountries = data.filter(client => client.country).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Clients Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and view all your clients in one place
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DashboardCard
              title="Total Clients"
              value={totalClients}
              icon={<Users className="w-6 h-6" />}
            />
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DashboardCard
              title="Unique Countries"
              value={countries}
              icon={<Globe className="w-6 h-6" />}
            />
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DashboardCard
              title="Gmail Clients"
              value={gmailClients}
              icon={<Mail className="w-6 h-6" />}
            />
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DashboardCard
              title="Total Countries"
              value={totalCountries}
              icon={<Phone className="w-6 h-6" />}
            />
          </div>
        </div>

        {/* Clients Table Card */}
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl font-bold">Clients Management</CardTitle>
                  <p className="text-blue-100 mt-1">
                    Complete list of all clients in your system
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
          
          <CardContent className="p-0">
            <div className="p-6">
              <DataTable columns={columns} data={data} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
