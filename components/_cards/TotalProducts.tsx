"use client"
import { fetchProducts } from "@/lib/api"
import { Package } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"

export const TotalProductsCard = () => {
     const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, []);
        const totalProducts = data.length
      
    return(
        <div>
             <DashboardCard
              title="Products"
              value={totalProducts}
              icon={<Package className="w-6 h-6" />}
            />
        </div>
    );
};