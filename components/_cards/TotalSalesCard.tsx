
import { TrendingUp } from "lucide-react"
import DashboardCard from "./DashboardCard"
import { fetchProducts } from "@/lib/api"
import { useEffect, useState } from "react"


export const TotalSalesCard = () => {
    const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, [])
        const totalSold = data.reduce((sum, product) => {
            const sales = parseInt(String(product.Sales).replace(/[^0-9.-]/g, ""), 10)
            return sum + (isNaN(sales) ? 0 : sales)
        }, 0)
    
    return(
        <div>
             <DashboardCard
              title="Sold"
              value={totalSold}
              icon={<TrendingUp className="w-6 h-6" />}
            />
        </div>
    )
}