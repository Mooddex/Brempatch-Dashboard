"use client"

import { ColumnDef } from "@tanstack/react-table"

// Shape of a row
export type Products = {
  id: number
  name: string
  Category: string
  price: string
  Stock:number
  Sales:string
}

export const columns: ColumnDef<Products>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "name" },
  { accessorKey: "Category", header: "Category" },
  { accessorKey: "price", header: "price" },
  { accessorKey: "Stock", header: "Stock" },
  { accessorKey: "Sales", header: "Sales" }
]
