

import { fetchProducts } from "@/lib/api"
import { Grid3X3, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import DashboardCard from "./DashboardCard"

export const ProductCategoryCard = () => {
     const [data, setData] = useState<any[]>([])
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            fetchProducts()
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false))
        }, [])
        const totalCategories = new Set(data.map(product => product.Category)).size
    
    return(
        <div>
             <DashboardCard
              title="Categories"
              value={totalCategories}
              icon={<Grid3X3 className="w-6 h-6" />}
            />
        </div>
    )
}