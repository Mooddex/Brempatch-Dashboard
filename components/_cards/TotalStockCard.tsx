
import { fetchProducts } from "@/lib/api"
import { Warehouse } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"

export const TotalStockCard = () => {
     const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, [])
        const totalStock = data.reduce((sum, product) => sum + (Number(product.Stock) || 0), 0)
      
    return(
        <div>
             <DashboardCard
              title="Stock"
              value={totalStock}
              icon={<Warehouse className="w-6 h-6" />}
            />
        </div>
    )
}