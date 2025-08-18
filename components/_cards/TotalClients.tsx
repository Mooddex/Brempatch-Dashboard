"use client"
import { fetchProducts } from "@/lib/api"
import { Package, Users } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"

export const TotalClientsCard = () => {
     const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, []);
        const totalClients = data.length
      
    return(
        <div>
            <DashboardCard title="Clients" value={totalClients} icon={<Users className="w-6 h-6" />} />
        </div>
    );
};