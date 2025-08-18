"use client"

import { DataTable } from "@/components/Data-table"
import { columns } from "@/components/_columns/product-columns"
import { fetchProducts } from "@/lib/api"
import { useState, useEffect } from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  Package, 
  Warehouse, 
  TrendingUp 
} from "lucide-react"
import { TotalSalesCard } from "../_cards/TotalSalesCard"
import { ProductCategoryCard } from "../_cards/ProductCategoriesCard"
import { TotalStockCard } from "../_cards/TotalStockCard"
import { TotalProductsCard } from "../_cards/TotalProducts"
import ResponsiveCard from "../_cards/ResponsiveDTCard"

export default function ProductsTable() {
    const [data, setData] = useState<any[]>([])
      const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        fetchProducts()
          .then(setData)
          .catch(console.error)
          .finally(() => setLoading(false))
      }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Product Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Manage and monitor your product inventory
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="">
            <TotalProductsCard />
          </div>
          
          <div className="">
            <TotalStockCard />
          </div>
          
          <div className="">
            <ProductCategoryCard />
          </div>
          
          <div className="">
            <TotalSalesCard />
          </div>
        </div>

{/* Desktop Clients Table */}
        <div className="hidden sm:block">
                <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardHeader >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Package className="w-8 h-8" />
                <div>
                  <CardTitle className="text-2xl font-bold">Product Inventory</CardTitle>
                  <p className="text-blue-100 mt-1">
                    Complete list of all products in your inventory
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
          <ResponsiveCard title="Products Table">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <DataTable data={data} columns={columns} />
            )}
          </ResponsiveCard>
        </div>

        {/* Quick Actions Section */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full">
                <Package className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Add Product</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Create new product entry</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                <Warehouse className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Manage Stock</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Update inventory levels</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">View Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Analytics & insights</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}