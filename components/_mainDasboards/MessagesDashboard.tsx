"use client"

import DashboardCard from "@/components/_cards/DashboardCard";
import { DataTable } from "@/components/Data-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { columns } from "@/components/_columns/Messages-columns";
import { Users, Mail, Phone, MailIcon } from "lucide-react";
import { fetchMessages } from "@/lib/api";
import { useEffect, useState } from "react";
import ResponsiveCard from "../_cards/ResponsiveDTCard";

const MessagesDashboard = () => {
  const [data, setData] = useState<any[]>([])
      const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        fetchMessages()
          .then(setData)
          .catch(console.error)
          .finally(() => setLoading(false))
      }, [])
  
     const TotalMessages = data.length
  const TotalSent = data.filter(message => message.sent === true ).length
  const totalRecieved = data.filter(message => message.sent === false ).length
  const TotalUnread = data.filter(message => message.is_read === false).length

    return ( 
        <div>
             <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Messages Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and view all your Messages in one place
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Messages" value={TotalMessages} icon={<Users className="w-6 h-6" />} />
          <DashboardCard title="Sent" value={TotalSent} icon={<Users className="w-6 h-6" />} />
          <DashboardCard title=" Received" value={totalRecieved} icon={<Mail className="w-6 h-4" />} />
          <DashboardCard title="Unread" value={TotalUnread} icon={<Phone className="w-6 h-4" />} />
        </div>

        {/* Clients Table */}
        <div className="hidden sm:block">
        <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MailIcon className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl font-bold"> Messages Dashboard</CardTitle>
                  <p className="text-blue-100 mt-1">Complete list of all Messages in your system</p>
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
          <ResponsiveCard title="Messages Table">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <DataTable data={data} columns={columns} />
            )}
          </ResponsiveCard>
        </div>

      </div>
    </div>
  
        </div>
     );
}
 
export default MessagesDashboard;